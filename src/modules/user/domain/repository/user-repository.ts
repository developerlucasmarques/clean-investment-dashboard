import { type User } from '../entity/user'

export interface IUserRepository extends IAddUserRepository {}

export interface IAddUserRepository {
  add: (user: User) => Promise<void>
}
