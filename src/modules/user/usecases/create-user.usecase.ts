import { bad, hit } from 'shared/core'
import type { CreateUserIn, CreateUserOut, ICreateUser } from '../domain/usecases/create-user'
import { User } from '../domain/entity/user'
import { type IAddUserRepository } from '../domain/repository/user-repository'
import { type IEncrypter } from '../domain/cryptography/encryper'

export class CreateUserUseCase implements ICreateUser {
  public constructor (
    private readonly addUserRepository: IAddUserRepository,
    private readonly encrypter: IEncrypter
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
