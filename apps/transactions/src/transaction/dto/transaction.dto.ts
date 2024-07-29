import { IsNumber, IsString, IsNotEmpty, Min } from 'class-validator';

export class CreateTransactionDto {
    @IsNumber()
    @IsNotEmpty()
    userId!: number;

    @IsNumber()
    @Min(0)
    @IsNotEmpty()
    fromAmount!: number;

    @IsString()
    @IsNotEmpty()
    fromCurrency!: string;

    @IsString()
    @IsNotEmpty()
    toCurrency!: string;
}