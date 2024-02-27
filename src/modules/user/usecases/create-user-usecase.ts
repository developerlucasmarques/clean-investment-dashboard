import { Injectable } from '@nestjs/common'
import { left, right } from 'shared/core'
import { User } from '../domain/entity/user'
import { IAddUserRepository } from '../domain/repository/user-repository'
import type { CreateUserInput, CreateUserOutput, ICreateUser } from '../domain/usecases/create-user'
import { IEncrypter } from '../domain/cryptography/encryper'

@Injectable()
export class CreateUserUseCase implements ICreateUser {
  constructor (
    private readonly addUserRepository: IAddUserRepository,
    private readonly encrypter: IEncrypter
  ) {}

  async execute (input: CreateUserInput): Promise<CreateUserOutput> {
    const userOrError = User.create(input)

    if (userOrError.isLeft()) {
      return left(userOrError.value)
    }
    const user = userOrError.value

    await this.addUserRepository.add(user)
    const accessToken = this.encrypter.encrypt(user.id.value)

    return right(accessToken)
  }
}
