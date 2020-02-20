import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthenticatedUser } from '../../common/auth/DTOs/authenticatedUser.class';



@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService
  ) { }


  async login ( user: any ) {
    const payload: AuthenticatedUser = {
      name: user.name,
      email: user.email,
      id: user.id
    };
    return {
      access_token: this.jwtService.sign( payload ),
      user: payload
    };
  }
}
