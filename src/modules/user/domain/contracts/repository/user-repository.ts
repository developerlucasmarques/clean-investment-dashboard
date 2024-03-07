import { type User } from '../../entity/user'
export abstract class AddUserRepository {
  abstract add: (user: User) => Promise<void>
}

export interface UserRepository extends AddUserRepository {}
