import { Injectable } from '@nestjs/common'
import { left, right } from '@/shared/core'
import { User } from '../domain/entity/user'
import { AbstAddUserRepository } from '../domain/repository/user-repository'
import type {
  CreateUserUseCaseInput, CreateUserUseCaseOutput, ICreateUserUseCase
} from '../domain/usecases/create-user'
import { AbstEncrypter } from '../domain/cryptography/encryper'

@Injectable()
export class CreateUserUseCase implements ICreateUserUseCase {
  constructor (
    private readonly addUserRepository: AbstAddUserRepository,
    private readonly encrypter: AbstEncrypter
  ) {}

  async execute (input: CreateUserUseCaseInput): Promise<CreateUserUseCaseOutput> {
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
