import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalStrategy } from '../../common/auth/strategys/local.strategy';
import { JwtStrategy } from '../../common/auth/strategys/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { apiJWTKey, jwtExpirationTime } from '../../common/configs/api.conf';



@Module( {
  imports: [
    PassportModule,
    JwtModule.register( {
      secret: apiJWTKey,
      signOptions: { expiresIn: jwtExpirationTime },
    } ),
  ],
  providers: [ AuthService, LocalStrategy, JwtStrategy ],
  controllers: [ AuthController ],
  exports: [ AuthService ],
} )
export class AuthModule { }
