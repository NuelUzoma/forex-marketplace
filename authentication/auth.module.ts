import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from '../apps/users/src/user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { jwtConstants } from './jwt.constants';

// @ts-ignore
@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      global: true, // Registered as global
      secret: jwtConstants.secret, // Secret Key
      signOptions: { expiresIn: '60m' } // expires in 1 Hour
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}
