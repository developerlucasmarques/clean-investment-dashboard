import { type User } from '../entity/user'
export abstract class AbstAddUserRepository {
  abstract add: (user: User) => Promise<void>
}

export interface IUserRepository extends AbstAddUserRepository {}
