import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { type AccessToken } from '@/modules/user/domain/cryptography/access-token'
import { type IEncrypter } from '@/modules/user/domain/cryptography/encryper'

@Injectable()
export class JwtAdapter implements IEncrypter {
  constructor (private readonly jwtService: JwtService) {}

  encrypt (value: string): AccessToken {
    const accessToken = this.jwtService.sign({ payload: value })

    return { accessToken }
  }
}
