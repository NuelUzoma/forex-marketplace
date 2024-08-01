import { Body, Controller, Get, Post, Request, UseFilters, UseGuards } from "@nestjs/common";
import { GrpcMethod } from "@nestjs/microservices";
import { AuthGuard } from '../../../../authentication/auth.guard'
import { TransactionOrderService } from "./transaction.service";
import { CreateTransactionDto } from "./dto/transaction.dto";
import { CreateOrderDto } from "../order/dto/order.dto";
import { Transaction } from "./entities/transaction.entity";
import { Order } from "src/order/entities/order.entity";
import { HttpExceptionFilter } from "../../../../libraries/src";

@Controller()
@UseFilters(HttpExceptionFilter)
@UseGuards(AuthGuard)
export class TransactionController {
    constructor(
        private readonly transactionOrderService: TransactionOrderService
    ) {}

    // HTTP Endpoint to create an exchange transaction
    @Post('transaction')
    async httpCreateExchangeTransaction(@Body() data: CreateTransactionDto, @Request() request: any): Promise<Transaction> {
        const userId = parseInt(request.user?.sub, 10); // Retrieve logged in userId
        if (!userId) {
            throw new Error("User not found");
        }

        return this.createExchangeTransaction({...data, userId});
    }

    // HTTP Endpoint to create an order
    @Post('order')
    async httpCreateOrder(@Body() data: CreateOrderDto, @Request() request: any): Promise<Order> {
        const userId = parseInt(request.user?.sub, 10); // Retrieve logged in userId
        if (!userId) {
            throw new Error("User not found");
        }

        return this.createOrder({...data, userId});
    }

    // HTTP Endpoint to fetch the user transactions
    @Get('transactions')
    async httpGetTransactions(@Request() request: any): Promise<Transaction[]> {
        const userId = parseInt(request.user?.sub, 10); // Retrieve logged in userId
        if (!userId) {
            throw new Error("User not found");
        }

        return this.getTransactionHistory(userId);
    }

    // gRPC method to create an exchange transaction
    @GrpcMethod('TransactionOrderService', 'CreateTransaction')
    createExchangeTransaction(data: CreateTransactionDto) {
        return this.transactionOrderService.createExchangeTransaction(data);
    }

    // gRPC method to fetch the user transactions
    @GrpcMethod('TransactionOrderService', 'GetTransactionHistory')
    getTransactionHistory(userId: number) {
        return this.transactionOrderService.getTransactionHistory(userId);
    }

    // gRPC method to create an order
    @GrpcMethod('TransactionOrderService', 'CreateOrder')
    createOrder(data: CreateOrderDto) {
        return this.transactionOrderService.createOrder(data);
    }
}