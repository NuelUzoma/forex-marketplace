import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class WalletDto {
    @IsNumber()
    userId!: number;

    @IsArray()
    @IsString({ each: true })
    currencies!: string[];
}

export class TransferFundsDto {
    reciepientUserId!: number;
    fromCurrency!: string;
    toCurrency!: string;
    amount!: number;
    exchangeRate!: number;
}