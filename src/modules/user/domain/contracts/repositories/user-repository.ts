import { type User } from '../../entity/user'

export interface AddUserRepository {
  add: (user: User) => Promise<void>
}
