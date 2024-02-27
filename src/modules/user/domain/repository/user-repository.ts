import { type User } from '../entity/user'
export abstract class IAddUserRepository {
  abstract add: (user: User) => Promise<void>
}

export abstract class IUserRepository extends IAddUserRepository {}
