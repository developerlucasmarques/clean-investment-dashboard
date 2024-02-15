import { bad, hit, type Result } from '@/shared/core'
import { Entity, type UniqueEntityID } from '@/shared/domain'
import { UserEmail, UserName } from './value-objects'
import type { UserEmailError, UserNameError } from './value-objects/errors'

type UserProps = {
  name: UserName
  email: UserEmail
}

type DataCreateUser = {
  name: string
  email: string
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

  public static create (data: DataCreateUser, id?: UniqueEntityID): Result<UserEmailError | UserNameError, User> {
    const { email, name } = data
    const nameOrError = UserName.create(name)
    const emailOrError = UserEmail.create(email)

    for (const result of [nameOrError, emailOrError]) {
      if (result.isBad()) {
        return bad(result.value)
      }
    }
    return hit(new User({
      name: nameOrError.value as UserName,
      email: emailOrError.value as UserEmail
    }))
  }
}
