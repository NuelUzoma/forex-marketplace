import { Injectable, OnModuleInit } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from "typeorm";
import { ClientGrpc, Client, Transport } from '@nestjs/microservices';
import { join } from "path";
import { Transaction } from "./entities/transaction.entity";
import { Order } from "../order/entities/order.entity";
import { WalletServiceClient } from "../../../../protos/generated/wallet/WalletService";
import { RateServiceClient } from "../../../../protos/generated/rate/RateService";
import { CreateTransactionDto } from "./dto/transaction.dto";
import { CreateOrderDto } from "../order/dto/order.dto";
import { GetRateRequest } from "../../../../protos/generated/rate/GetRateRequest";
import { GetRateResponse__Output } from "../../../../protos/generated/rate/GetRateResponse";
import { UpdateBalanceRequest } from "../../../../protos/generated/wallet/UpdateBalanceRequest";
import { ValidationException } from "../../../../libraries/src/index";


@Injectable()
export class TransactionOrderService implements OnModuleInit {
    // gRPC Wallet Client
    @Client({
        transport: Transport.GRPC,
        options: {
            package: 'wallet',
            protoPath: join(__dirname, '../../../protos/wallet.proto'),
        },
    })
    private walletClient!: ClientGrpc;

    // gRPC Rate Client
    @Client({
        transport: Transport.GRPC,
        options: {
            package: 'rate',
            protoPath: join(__dirname, '../../../protos/rate.proto'),
        },
    })
    private rateClient!: ClientGrpc;

    private walletService!: WalletServiceClient; // gRPC wallet client
    private rateService!: RateServiceClient; // gRPC rate client

    constructor(
        @InjectRepository(Transaction)
        private readonly transactionRepository: Repository<Transaction>,
        @InjectRepository(Order)
        private readonly orderRepository: Repository<Order>
    ) {}

    // gRPC initializer
    onModuleInit() {
        this.walletService = this.walletClient.getService<WalletServiceClient>('WalletService');
        this.rateService = this.rateClient.getService<RateServiceClient>('RateService');
    }

    // Create exchange transaction between a single user wallet
    async createExchangeTransaction(data: CreateTransactionDto): Promise<Transaction> {
        try {
            const getRateRequest: GetRateRequest = {
                fromCurrency: data.fromCurrency,
                toCurrency: data.toCurrency,
            };
    
            // Fetch the current rates from the rates microservice
            const rateResponse = await new Promise<GetRateResponse__Output>((resolve, reject) => {
                this.rateService.getRate(getRateRequest, (error, response) => {
                    if (error) {
                        reject(error);
                    } else {
                        // @ts-ignore
                        resolve(response);
                    }
                });
            });
    
            const rate = rateResponse.rate; // rate
            const transaction = this.transactionRepository.create({
                ...data,
                exchangeRate: rate,
                toAmount: data.fromAmount * Number(rate),
                status: 'pending',
                timestamp: new Date()
            });
    
            // Update wallet balances
            const updateBalanceSenderRequest: UpdateBalanceRequest = { // Sender
                userId: data.userId,
                currency: data.fromCurrency,
                amount: -data.fromAmount
            }
    
            const updateBalanceReciepientRequest: UpdateBalanceRequest = { // Reciepient
                userId: data.userId,
                currency: data.toCurrency,
                amount: transaction.toAmount
            }
    
            await new Promise((resolve, reject) => {
                this.walletService.updateBalance(updateBalanceSenderRequest, (error, response) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(response);
                    }
                });
            });
    
            await new Promise((resolve, reject) => {
                this.walletService.updateBalance(updateBalanceReciepientRequest, (error, response) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(response);
                    }
                });
            });
    
            // Update the transaction status
            transaction.status = 'completed';
            return this.transactionRepository.save(transaction);
        } catch (error) {
            throw new ValidationException(`Failed to create exchange transaction: ${error}`)
        }
    }

    // Create Order
    async createOrder(data: CreateOrderDto): Promise<Order> {
        try{
            const order = this.orderRepository.create({
                ...data,
                status: 'pending',
                createdAt: new Date()
            });
            
            return this.orderRepository.save(order);
        } catch (error) {
            throw new ValidationException(`Failed to create Order: ${error}`)
        }
    }

    // Get the user transaction history
    async getTransactionHistory(userId: number): Promise<Transaction[]> {
        return this.transactionRepository.find({ where: { userId }});
    }

    // Check and update pending orders
    async checkAndUpdateOrders() {
        // Find pending orders
        const pendingOrders = await this.orderRepository.find({ where: { status: 'pending' }});

        for (const order of pendingOrders) { // Iterate through each pending order
            const getRateRequest: GetRateRequest = {
                fromCurrency: order.fromCurrency,
                toCurrency: order.toCurrency,
            };

            const rateResponse = await new Promise<GetRateResponse__Output>((resolve, reject) => {
                this.rateService.getRate(getRateRequest, (error, response) => {
                    if (error) {
                        reject(error);
                    } else {
                        // @ts-ignore
                        resolve(response);
                    }
                });
            });

            const currentRate = rateResponse.rate;

            if ((order.type === 'buy' && Number(currentRate) <= order.targetRate) || (order.type === 'sell' && Number(currentRate) >= order.targetRate)) {
                order.status = 'executed';
                order.executedAt = new Date();
                await this.orderRepository.save(order);
            }
        }
    }
}