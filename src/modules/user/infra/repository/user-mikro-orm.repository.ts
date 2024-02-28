import { EntityManager } from '@mikro-orm/postgresql'
import { Injectable } from '@nestjs/common'
import { type User } from '@/modules/user/domain/entity/user'
import { type IUserRepository } from '@/modules/user/domain/repository/user-repository'
import { UserEntityMO } from './user-mikro-orm.entity'
@Injectable()
export class UserRepositoryMO implements IUserRepository {
  constructor (private readonly entityManager: EntityManager) {}

  async add (user: User): Promise<void> {
    const userEntity = new UserEntityMO(
      user.id.value,
      user.name.value.name,
      user.email.value.email
    )

    this.entityManager.persist(userEntity)
    await this.entityManager.flush()
  }
}
