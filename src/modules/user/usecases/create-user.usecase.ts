import { left, right, Application } from '@/shared/core'
import { Injectable } from '@nestjs/common'
import { Encrypter } from '../domain/cryptography/encryper'
import { User } from '../domain/entity/user'
import { AddUserRepository } from '../domain/repository/user-repository'
import type {
  CreateUserInput, CreateUserOutput, CreateUser
} from '../domain/usecases/create-user'

@Injectable()
export class CreateUserUseCase implements CreateUser {
  constructor (
    private readonly addUserRepository: AddUserRepository,
    private readonly encrypter: Encrypter,
    private readonly application: Application
  ) {}

  async execute (input: CreateUserInput): Promise<CreateUserOutput> {
    return await this.application.run(async () => {
      const userOrError = User.create(input)

      if (userOrError.isLeft()) {
        return left(userOrError.value)
      }
      const user = userOrError.value

      await this.addUserRepository.add(user)
      const accessToken = this.encrypter.encrypt(user.id.value)

      return right(accessToken)
    })
  }
}
