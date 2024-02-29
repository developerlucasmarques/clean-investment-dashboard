import type { IDbEntity } from '@/shared/core'
import { type AggregateRoot } from '@/shared/domain'
import { Entity, PrimaryKey, Property } from '@mikro-orm/core'
import { type User } from '../../domain/entity/user'

@Entity({ tableName: 'user' })
export class UserEntityMO implements IDbEntity {
  @PrimaryKey()
    id: string
  @Property()
    name: string
  @Property({
    unique: true
  })
    email: string
  aggregate: AggregateRoot<any>

  constructor (user: User) {
    this.id = user.id.value
    this.name = user.name.value.name
    this.email = user.email.value.email
    this.aggregate = user
  }
}
