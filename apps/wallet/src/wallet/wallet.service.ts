import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClientGrpc, Client, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { Wallet } from './entities/wallet.entity';
import { WalletDto } from './dto/wallet.dto';
import { GetUserByIdResponse } from '../../../../protos/generated/user/GetUserByIdResponse';
import { UserServiceClient } from '../../../../protos/generated/user/UserService';
import { UpdateBalanceRequest } from "../../../../protos/generated/wallet/UpdateBalanceRequest";
import { CurrencyBalance } from './entities/currencyBalance.entity';
import { UpdateBalanceResponse } from '../../../../protos/generated/wallet/UpdateBalanceResponse';
import { NotFoundException, ValidationException } from "../../../../libraries/src/index";


@Injectable()
export class WalletService implements OnModuleInit {
    // Grpc client
    @Client({
        transport: Transport.GRPC,
        options: {
          package: 'user',
          protoPath: join(__dirname, '../../../protos/user.proto'),
        },
    })
    private client!: ClientGrpc;
    private userService!: UserServiceClient;

    constructor(
        @InjectRepository(Wallet)
        private readonly walletRepository: Repository<Wallet>,
        @InjectRepository(CurrencyBalance)
        private readonly currencyBalanceRepository: Repository<CurrencyBalance>
    ) {}

    onModuleInit() {
        this.userService = this.client.getService<UserServiceClient>('UserService');
    }

    // Method to create wallet
    async createWallet(walletDto: WalletDto): Promise<Wallet> {        
        try {
            // @ts-ignore
            const userResponse: GetUserByIdResponse = await this.userService.GetUserById({ userId: walletDto.userId });
            
            if (!userResponse) {
                throw new NotFoundException('User not found');
            }
            
            const wallet = this.walletRepository.create({ userId: walletDto.userId });
            const savedWallet = await this.walletRepository.save(wallet); // Save wallet

            // Create initial wallet balances
            for (const currency of walletDto.currencies) {
                await this.currencyBalanceRepository.save({
                    wallet: savedWallet,
                    currency,
                    balance: 0
                });
            }

            return savedWallet;
        } catch (error: any) {
            throw new ValidationException(`Error creating wallet: ${error.message}`);
        }
    }

    // Method to get logged in user wallet
    async getWalletByUserId(userId: number): Promise<Wallet> {
        const wallet = await this.walletRepository.findOne({
            where: { userId },
            relations: ['currencyBalances']
        });
        
        if (!wallet) {
            throw new NotFoundException('Wallet not found!');
        }

        return wallet;
    }

    // Retrieve the balances for each currency
    async getBalance(userId: number, currency: string): Promise<number> {
        const wallet = await this.getWalletByUserId(userId);

        // Find the balances per currency
        const currencyBalance = wallet.currencyBalances.find(cb => cb.currency === currency);

        if (!currencyBalance) {
            throw new NotFoundException(`Balance for currency ${currency} not found`);
        }

        // Return the balance
        return currencyBalance.balance;
    }

    // Update the balances for each wallet transfer
    async updateBalance(updateBalanceRequest: UpdateBalanceRequest): Promise<UpdateBalanceResponse> {
        const { userId, currency, amount } = updateBalanceRequest;
        const wallet = await this.getWalletByUserId(Number(userId));

        // Find the balances per currency
        let currencyBalance = wallet.currencyBalances.find(cb => cb.currency === currency);

        if (!currencyBalance) {
            currencyBalance = this.currencyBalanceRepository.create({
                wallet,
                currency,
                balance: 0
            });
        }

        currencyBalance.balance += Number(amount); // Update the balance

        await this.currencyBalanceRepository.save(currencyBalance);

        return { success: true, newBalance: currencyBalance.balance };
    }

    // Deposit funds into one's wallet

    // Method for wallet-to-wallet transfer between users
    async performTransfer(
        senderId: number,
        reciepientId: number,
        fromCurrency: string,
        toCurrency: string,
        amount: number,
        exchangeRate: number
    ): Promise<void> {
        try {
            // Deposit amount validation
            if (amount <= 0) {
                throw new ValidationException('Transfer amount must be greater than 0');
            }

            const senderWallet = await this.getWalletByUserId(senderId); // Sender's wallet
            const reciepientWallet = await this.getWalletByUserId(reciepientId); // Reciepient wallet

            // Prohibit funds deposit to one's wallet
            if (senderWallet.userId === reciepientWallet.userId) {
                throw new ValidationException('Transfer to your own wallet is prohibited');
            }

            // Retrieve balance and check for insufficient funds for transfer
            const senderBalance = await this.getBalance(senderId, fromCurrency);
            if (senderBalance < amount) {
                throw new ValidationException('Insufficient Balance');
            }

            const toAmount = amount * exchangeRate;

            // Update wallets balances
            const updateBalanceSenderRequest: UpdateBalanceRequest = { // Sender
                userId: senderId,
                currency: fromCurrency,
                amount: -amount
            };

            const updateBalanceReciepientRequest: UpdateBalanceRequest = { // Reciepient
                userId: reciepientId,
                currency: toCurrency,
                amount: toAmount
            }
            await this.updateBalance(updateBalanceSenderRequest);
            await this.updateBalance(updateBalanceReciepientRequest);
        } catch (err) {
            throw new ValidationException(`Cannot perform transfer: ${err}`);
        }
    }
}