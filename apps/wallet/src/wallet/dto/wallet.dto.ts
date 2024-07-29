import { IsNotEmpty, IsNumber } from 'class-validator';

export class WalletDto {
    @IsNumber()
    userId!: number;

    @IsNotEmpty()
    currencies!: string[];
}

export class TransferFundsDto {
    reciepientUserId!: number;
    fromCurrency!: string;
    toCurrency!: string;
    amount!: number;
    exchangeRate!: number;
}