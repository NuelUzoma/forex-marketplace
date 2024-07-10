import { Controller, Get, Post, Body, HttpCode, HttpStatus, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

// @ts-ignore
@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ) {}

    // @ts-ignore
    @HttpCode(HttpStatus.OK)
    // @ts-ignore
    @Post('login')
    // @ts-ignore
    signIn(@Body() signInDto: Record<string, any>) {
        return this.authService.signIn(signInDto.username, signInDto.password);
    }

    // @ts-ignore
    @UseGuards(AuthGuard)
    // @ts-ignore
    @Get('user')
    // @ts-ignore
    getProfile(@Request() req: any) {
        return req.user;
    }
}
