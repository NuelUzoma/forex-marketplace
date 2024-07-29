import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Wallet } from "./entities/wallet.entity";
import { WalletService } from "./wallet.service";
import { WalletController } from "./wallet.controller";
import { JwtService } from "@nestjs/jwt";
import { CurrencyBalance } from "./entities/currencyBalance.entity";


@Module({
    imports: [
        TypeOrmModule.forFeature([Wallet, CurrencyBalance]),
    ],
    controllers: [WalletController],
    providers: [WalletService, JwtService],
})

export class WalletModule {};