import { Entity, PrimaryKey, Property } from '@mikro-orm/core'

@Entity({ tableName: 'user' })
export class UserEntityMO {
  @PrimaryKey()
    id: string
  @Property()
    name: string
  @Property({
    unique: true
  })
    email: string

  constructor (
    id: string,
    name: string,
    email: string
  ) {
    this.id = id
    this.name = name
    this.email = email
  }
}
