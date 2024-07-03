import { IsArray, IsEmail, IsNotEmpty, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ProfileDto } from '../../profile/dto/profile.dto';

// User Data Transfer Object
export class UserDto {
    @IsNotEmpty()
    username!: string;

    @IsEmail()
    email!: string;

    @IsNotEmpty()
    password!: string;

    @ValidateNested({ each: true })
    @Type(() => ProfileDto)
    @IsArray()
    profile!: ProfileDto[]; // Nested User Profile
}