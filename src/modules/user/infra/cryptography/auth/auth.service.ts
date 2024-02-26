import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { type AccessToken } from 'modules/user/domain/cryptography/access-token'
import { type IEncrypter } from 'modules/user/domain/cryptography/encryper'

@Injectable()
export class AuthService implements IEncrypter {
  public constructor (private readonly jwtService: JwtService) {}

  public encrypt (value: string): AccessToken {
    const accessToken = this.jwtService.sign(value)

    return { accessToken }
  }
}
