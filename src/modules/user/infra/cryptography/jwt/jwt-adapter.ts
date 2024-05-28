import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import type { Encrypted, Encryptor } from '@/modules/user/domain/contracts/cryptography/encryptor'

@Injectable()
export class JwtAdapter implements Encryptor {
  constructor (private readonly jwtService: JwtService) {}

  encrypt (value: string): Encrypted {
    const encrypted = this.jwtService.sign({ payload: value })

    return { value: encrypted }
  }
}
