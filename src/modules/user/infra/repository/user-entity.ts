import { Entity, PrimaryKey, Property } from '@mikro-orm/core'

@Entity({ tableName: 'user' })
export class UserEntity {
  @PrimaryKey()
    id: string
  @Property()
    userName: string
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
    this.userName = name
    this.email = email
  }
}
