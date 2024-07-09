import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) {}

    async signIn(username: string, password: string): Promise<{ access_token: string }> {
        const user = await this.userService.findByUsername(username);
        // Compare password using bcrypt
        if (!user || !(await user.comparePassword(password))) {
            throw new UnauthorizedException('Invalid Credentials!');
        }

        const payload = { sub: user?.id, username: user.username };
        const token = await this.jwtService.signAsync(payload);
        
        return {
            access_token: token,
        };
    }
}
