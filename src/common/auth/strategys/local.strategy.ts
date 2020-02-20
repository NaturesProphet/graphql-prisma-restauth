import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class LocalStrategy extends PassportStrategy( Strategy ) {
  constructor() {
    super( { passReqToCallback: true } );
  }

  async validateUser ( username: string, pass: string ): Promise<any> {
    let user;

    // achar o usuário.

    if ( !user ) {
      throw new UnauthorizedException( `Usuário ${username} não encontrado` );
    }

    if ( user && bcrypt.compareSync( pass, user.getPasswordHash() ) ) {
      return user;
    }
    return null;
  }




  async validate ( req: any, username: string, password: string ): Promise<any> {

    const user = await this.validateUser( username, password );
    if ( !user ) {
      throw new UnauthorizedException( 'senha incorreta.' );
    }
    return user;
  }
}
