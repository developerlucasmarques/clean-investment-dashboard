import { type AddRepository } from '@/shared/domain/repository'
import { type User } from '../../entity/user'
export abstract class AddUserRepository implements AddRepository<User> {
  abstract add: (user: User) => Promise<void>
}

export interface UserRepository extends AddUserRepository {}
