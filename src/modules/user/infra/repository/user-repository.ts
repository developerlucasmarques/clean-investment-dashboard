import { EntityManager } from '@mikro-orm/postgresql'
import { Injectable } from '@nestjs/common'
import { type User } from 'modules/user/domain/entity/user'
import { type IUserRepository } from 'modules/user/domain/repository/user-repository'
import { UserEntity } from './user-entity'
@Injectable()
export class UserRepository implements IUserRepository {
  constructor (private readonly entityManager: EntityManager) {}

  async add (user: User): Promise<void> {
    const userEntity = new UserEntity(
      user.id.value,
      user.name.value.name,
      user.email.value.email
    )

    this.entityManager.persist(userEntity)
    await this.entityManager.flush()
    console.log('USERRR')
  }
}
