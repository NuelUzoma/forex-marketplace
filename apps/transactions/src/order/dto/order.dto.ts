import { IsNumber, IsString, IsNotEmpty, IsEnum, Min } from 'class-validator';

// Enumerator for the OrderType
enum OrderType {
    BUY = 'buy',
    SELL = 'sell'
}

export class CreateOrderDto {
    @IsNumber()
    @IsNotEmpty()
    userId!: number;

    @IsEnum(OrderType)
    @IsNotEmpty()
    type!: OrderType;

    @IsNumber()
    @Min(0)
    @IsNotEmpty()
    amount!: number;

    @IsString()
    @IsNotEmpty()
    fromCurrency!: string;

    @IsString()
    @IsNotEmpty()
    toCurrency!: string;

    @IsNumber()
    @IsNotEmpty()
    targetRate!: number;
}