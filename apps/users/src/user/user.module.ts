import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { Profile } from "../profile/entities/profile.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([User, Profile]),
    ],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService]
})

export class UserModule {};