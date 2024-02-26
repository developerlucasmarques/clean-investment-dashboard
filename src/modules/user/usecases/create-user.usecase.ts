import { bad, hit } from 'shared/core'
import type { CreateUserIn, CreateUserOut, ICreateUser } from '../domain/contracts/usecases/create-user'
import { User } from '../domain/entity/user'
import { type AddUserRepository } from '../domain/contracts/repositories/user-repository'
import { type Encrypter } from '../domain/contracts/cryptography/encryper'

export class CreateUserUseCase implements ICreateUser {
  public constructor (
    private readonly addUserRepository: AddUserRepository,
    private readonly encrypter: Encrypter
  ) {}

  public async execute (input: CreateUserIn): Promise<CreateUserOut> {
    const userOrError = User.create(input)

    if (userOrError.isBad()) {
      return bad(userOrError.value)
    }
    const user = userOrError.value

    await this.addUserRepository.add(user)
    const accessToken = this.encrypter.encrypt(user.id.value)

    return hit(accessToken)
  }
}
