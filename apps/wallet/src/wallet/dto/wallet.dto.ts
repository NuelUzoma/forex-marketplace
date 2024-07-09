import { IsNumber } from 'class-validator';

export class WalletDto {
    @IsNumber()
    balance!: number;
}