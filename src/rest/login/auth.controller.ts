import { Controller, Request, Post, UseGuards, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { LoginDto } from '../../common/auth/DTOs/login.dto';



@Controller( 'login' )
export class AuthController {
  constructor( private readonly authService: AuthService ) { }

  @UseGuards( AuthGuard( 'local' ) )
  @Post()
  async login ( @Request() req, @Body() dto: LoginDto ) {
    return this.authService.login( req.user );
  }

}
