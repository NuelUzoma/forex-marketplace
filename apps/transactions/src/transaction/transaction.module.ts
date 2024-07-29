import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Transaction } from "./entities/transaction.entity";
import { Order } from "../order/entities/order.entity";
import { TransactionOrderService } from "./transaction.service";
import { TransactionController } from "./transaction.controller";

@Module({
    imports: [
        TypeOrmModule.forFeature([Transaction, Order]),
    ],
    controllers: [TransactionController],
    providers: [TransactionOrderService],
})

export class TransactionModule {};