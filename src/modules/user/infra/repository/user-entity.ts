import { Entity, PrimaryKey, Property } from '@mikro-orm/core'

@Entity()
export class UserEntity {
  @PrimaryKey()
  public id: string
  @Property()
  public name: string
  @Property()
  public email: string

  public constructor (
    id: string,
    name: string,
    email: string
  ) {
    this.id = id
    this.name = name
    this.email = email
  }
}
