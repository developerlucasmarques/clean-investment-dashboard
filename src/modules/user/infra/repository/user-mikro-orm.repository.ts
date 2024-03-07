import { type UserRepository } from '@/modules/user/domain/contracts/repository/user-repository'
import { type User } from '@/modules/user/domain/entity/user'
import { EntityManager } from '@mikro-orm/postgresql'
import { Injectable } from '@nestjs/common'
import { UserDbEntity } from './user-mikro-orm.db-entity'
@Injectable()
export class UserMikroOrmRepository implements UserRepository {
  constructor (private readonly entityManager: EntityManager) {}

  async add (user: User): Promise<void> {
    const userEntity = new UserDbEntity(user)

    this.entityManager.persist(userEntity)
  }
}
