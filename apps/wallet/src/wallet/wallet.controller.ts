import { Controller, Post, Body, Get, Put, Param, UseGuards, Request, UseFilters } from '@nestjs/common';
import { Wallet } from './entities/wallet.entity';
import { WalletDto } from './dto/wallet.dto';
import { WalletService } from './wallet.service';
import { AuthGuard } from '../../../../authentication/auth.guard';
import { GrpcMethod } from '@nestjs/microservices';
import { UpdateBalanceRequest } from '../../../../protos/generated/wallet/UpdateBalanceRequest';
import { UpdateBalanceResponse } from "../../../../protos/generated/wallet/UpdateBalanceResponse";
import { HttpExceptionFilter } from '../../../../libraries/src';


@Controller('wallets')
@UseFilters(HttpExceptionFilter)
@UseGuards(AuthGuard)
export class WalletController {
    constructor(
        private readonly walletService: WalletService
    ) {}

    @Post() // Create wallet
    async createWallet(@Body() walletDto: WalletDto, @Request() request: any): Promise<Wallet> {
        const userId = parseInt(request.user?.sub, 10); // Retrieve logged in userId
        if (!userId) {
            throw new Error("User not found");
        }

        return this.walletService.createWallet({...walletDto, userId});
    }

    // Get wallet by userId
    @Get(':userId')
    async getWallet(@Request() request: any): Promise<Wallet> {
        const userId = parseInt(request.user?.sub, 10); // Retrieve logged in userId
        if (!userId) {
            throw new Error("User not found");
        }

        return this.walletService.getWalletByUserId(userId);
    }

    // Get balances for each currency
    @Get('balance/:currency')
    async getBalance(@Param('currency') currency: string, @Request() request: any): Promise<{ balance: number}> {
        const userId = parseInt(request.user?.sub, 10); // Retrieve logged in userId
        if (!userId) {
            throw new Error("User not found");
        }

        const balance = await this.walletService.getBalance(userId, currency);
        return { balance };
    }

    // Wallet Transfer
    @Put('transfer')
    async transferFunds(
        @Body() transferDto: {
            reciepientId: number,
            fromCurrency: string,
            toCurrency: string,
            amount: number,
            exchangeRate: number
        },
        @Request() request: any
    ): Promise<{ message: string }> {
        const userId = parseInt(request.user?.sub, 10); // Retrieve logged in userId
        if (!userId) {
            throw new Error("User not found");
        }

        await this.walletService.performTransfer(
            userId,
            transferDto.reciepientId,
            transferDto.fromCurrency,
            transferDto.toCurrency,
            transferDto.amount,
            transferDto.exchangeRate
        );

        return { message: 'Transfer Successful' };
    }

    // Grpc client calls to update the balance
    @GrpcMethod('WalletService', 'UpdateBalance')
    async updateBalance(updateBalanceRequest: UpdateBalanceRequest): Promise<UpdateBalanceResponse> {
        return this.walletService.updateBalance(updateBalanceRequest);
    }
}