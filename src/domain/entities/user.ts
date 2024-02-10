import { Entity, type UniqueEntityID } from '@/shared/domain'

type UserProps = {
  name: string
  email: string
  password: string
}

export class User extends Entity<UserProps> {
  private constructor (props: UserProps, id?: UniqueEntityID) {
    super(props, id)
  }

  public get name (): string {
    return this.getProp('name')
  }

  public get email (): string {
    return this.getProp('email')
  }

  public get password (): string {
    return this.getProp('password')
  }
}
