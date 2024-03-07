import { type AddRepository } from '@/shared/domain/contracts'
import { type User } from '../../entity/user'
export abstract class AddUserRepository implements AddRepository<User> {
  abstract add: (user: User) => Promise<void>
}

export interface UserRepository extends AddUserRepository {}
