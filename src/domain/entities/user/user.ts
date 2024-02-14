import { Entity, type UniqueEntityID } from '@/shared/domain'
import type { UserEmail, UserName } from './value-objects'

type UserProps = {
  name: UserName
  email: UserEmail
}

export class User extends Entity<UserProps> {
  private constructor (props: UserProps, id?: UniqueEntityID) {
    super(props, id)
  }

  public get name (): UserName {
    return this.getProp('name')
  }

  public get email (): UserEmail {
    return this.getProp('email')
  }
}
