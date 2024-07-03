import { Controller, Get, Put, Post, Body, Param } from "@nestjs/common";
import { User } from "./entities/user.entity";
import { UserService } from "./user.service";
import { UserDto } from "./dto/user.dto";
import { Profile } from "../profile/entities/profile.entity";

@Controller('users')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) {}

    @Post() // POST Request to create/signup a user
    async create(@Body() userDto: UserDto): Promise<User> {
        const user = await this.userService.create(userDto);
        return user;
    }

    @Get() // GET Request to retrieve all members
    async findAll(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Get(':username') // GET Request to retrieve user by username
    async findByUsername(@Param('username') username: string): Promise<User> {
        return this.userService.findByUsername(username);
    }

    @Put(':userId/profile') // PUT Request to update the user profile
    async updateProfile(
        @Param('userId') userId: number,
        @Body() profileData: Partial<Profile>,
    ): Promise<Profile> {
        return this.userService.updateProfile(userId, profileData);
    }
}