import { type EntityManager } from '@mikro-orm/postgresql'
import { type User } from 'modules/user/domain/entity/user'
import { type IUserRepository } from 'modules/user/domain/repository/user-repository'

export class UserRepository implements IUserRepository {
  public constructor (private readonly entityManager: EntityManager) {}

  public async add (user: User): Promise<void> {
    this.entityManager.persist(user)
  }
}
