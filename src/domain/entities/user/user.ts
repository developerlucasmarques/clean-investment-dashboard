import { bad, hit, type Result } from '@/shared/core'
import { Entity, UniqueEntityID } from '@/shared/domain'
import { UserEmail, UserName } from './value-objects'
import type { UserEmailError, UserNameError } from './value-objects/errors'
import type { DataCreateUser, UserProps } from './user-types'

export class User extends Entity<UserProps> {
  private constructor (props: UserProps) {
    super(props)
  }

  public static create (data: DataCreateUser): Result<UserEmailError | UserNameError, User> {
    const { email, name } = data
    const nameOrError = UserName.create(name)
    const emailOrError = UserEmail.create(email)

    for (const result of [nameOrError, emailOrError]) {
      if (result.isBad()) {
        return bad(result.value)
      }
    }
    const id = data.id ? new UniqueEntityID(data.id) : new UniqueEntityID()

    return hit(new User({
      name: nameOrError.value as UserName,
      email: emailOrError.value as UserEmail,
      id
    }))
  }
}
