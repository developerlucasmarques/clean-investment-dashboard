import { type AddRepository } from '@/shared/domain/repository'
import { type User } from '../../entity/user'

export namespace UserRepository {
  export abstract class AddUser implements AddRepository<User> {
    abstract add: (user: User) => Promise<void>
  }

  export interface Repository extends AddUser {}
}
