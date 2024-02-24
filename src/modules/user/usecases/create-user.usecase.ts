import { bad } from '@/shared/core'
import type { CreateUserIn, CreateUserOut, ICreateUser } from '../domain/contracts/usecases/create-user'
import { User } from '../domain/entity/user'
import { type AddUserRepository } from '../domain/contracts/repositories/add-user-repository'

export class CreateUserUseCase implements ICreateUser {
  public constructor (
    private readonly addUserRepository: AddUserRepository
  ) {}

  public async execute (input: CreateUserIn): Promise<CreateUserOut> {
    const userOrError = User.create(input)

    if (userOrError.isBad()) {
      return bad(userOrError.value)
    }
    await this.addUserRepository.add(userOrError.value)

    return '' as any
  }
}
