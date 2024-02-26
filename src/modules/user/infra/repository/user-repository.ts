import { type AddUserRepository } from 'modules/user/domain/contracts/repositories/user-repository'
import { type User } from 'modules/user/domain/entity/user'

interface IUserRepository extends AddUserRepository {}

export class UserRepository implements IUserRepository {
  public async add (user: User): Promise<void> {}
}
