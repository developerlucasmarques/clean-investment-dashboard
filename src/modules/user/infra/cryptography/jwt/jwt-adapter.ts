import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { type AccessToken } from '@/modules/user/domain/contracts/cryptography/access-token'
import { type Encrypter } from '@/modules/user/domain/contracts/cryptography/encryper'

@Injectable()
export class JwtAdapter implements Encrypter {
  constructor (private readonly jwtService: JwtService) {}

  encrypt (value: string): AccessToken {
    const accessToken = this.jwtService.sign({ payload: value })

    return { accessToken }
  }
}
