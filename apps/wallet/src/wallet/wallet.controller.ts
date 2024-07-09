import { Controller, Post, Body, Get, Put, Param, UseGuards, Request } from '@nestjs/common';
import { Wallet } from './entities/wallet.entity';
import { WalletDto } from './dto/wallet.dto';
import { WalletService } from './wallet.service';
import { AuthGuard } from '../../../users/src/auth/auth.guard'


@Controller('wallets')
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

        return this.walletService.createWallet(walletDto, userId);
    }

    // Get wallet by userId
    @Get()
    async getWallet(@Request() request: any): Promise<Wallet> {
        const userId = parseInt(request.user?.sub, 10); // Retrieve logged in userId
        if (!userId) {
            throw new Error("User not found");
        }

        return this.walletService.getWalletByUserId(userId);
    }

    // Wallet Deposit
    @Put('deposit/:walletId')
    async depositWallet(@Param('walletId') walletId: number, @Body('amount') amount: number, @Request() request: any): Promise<any> {
        const userId = parseInt(request.user?.sub, 10); // Retrieve logged in userId
        if (!userId) {
            throw new Error("User not found");
        }

        return this.walletService.performDeposit(userId, walletId, amount);
    }
}