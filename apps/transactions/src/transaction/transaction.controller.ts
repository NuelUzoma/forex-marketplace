import { Controller } from "@nestjs/common";
import { GrpcMethod } from "@nestjs/microservices";
import { TransactionOrderService } from "./transaction.service";
import { CreateTransactionDto } from "./dto/transaction.dto";
import { CreateOrderDto } from "../order/dto/order.dto";

@Controller()
export class TransactionController {
    constructor(
        private readonly transactionOrderService: TransactionOrderService
    ) {}

    @GrpcMethod('TransactionOrderService', 'CreateTransaction')
    createTransaction(data: CreateTransactionDto) {
        return this.transactionOrderService.createTransaction(data);
    }

    @GrpcMethod('TransactionOrderService', 'GetTransactionHistory')
    getTransactionHistory(data: { userId: number }) {
        return this.transactionOrderService.getTransactionHistory(data.userId);
    }

    @GrpcMethod('TransactionOrderService', 'CreateOrder')
    createOrder(data: CreateOrderDto) {
        return this.transactionOrderService.createOrder(data);
    }
}