import { left, right } from '@/shared/core'
import { Injectable } from '@nestjs/common'
import { Encryptor } from '../domain/contracts/cryptography/encryptor'
import { User } from '../domain/entity/user'
import { AddUserRepository } from '../domain/contracts/repository/user-repository'
import type { CreateUser, CreateUserInput, CreateUserOutput } from '../domain/contracts/usecases/create-user'

@Injectable()
export class CreateUserUseCase implements CreateUser {
  constructor (
    private readonly addUserRepository: AddUserRepository,
    private readonly encryptor: Encryptor
  ) {}

  async execute (input: CreateUserInput): Promise<CreateUserOutput> {
    const userOrError = User.create(input)

    if (userOrError.isLeft()) {
      return left(userOrError.value)
    }
    const user = userOrError.value

    await this.addUserRepository.add(user)
    const encrypted = this.encryptor.encrypt(user.id)

    return right({ accessToken: encrypted.value })
  }
}
