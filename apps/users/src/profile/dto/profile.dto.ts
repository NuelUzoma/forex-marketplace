import { IsNotEmpty, IsNumber } from 'class-validator';

// Profile Data Transfer Object
export class ProfileDto {
    @IsNotEmpty()
    firstname!: string;

    @IsNotEmpty()
    lastname!: string;

    @IsNumber()
    age!: number;
}