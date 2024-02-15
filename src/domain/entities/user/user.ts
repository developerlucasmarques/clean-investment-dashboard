import { bad, hit, type Result } from '@/shared/core'
import { AgregateRoot, UniqueEntityID } from '@/shared/domain'
import type { DataCreateUser, UserProps } from './user-types'
import { UserEmail, UserName } from './value-objects'
import type { UserEmailError, UserNameError } from './value-objects/errors'
import { UserCreated } from './events'

export class User extends AgregateRoot<UserProps> {
  private constructor (props: UserProps) {
    super(props)
    Object.freeze(this)
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

    const user = new User({
      id,
      name: nameOrError.value as UserName,
      email: emailOrError.value as UserEmail
    })

    const isNewUser = !data.id

    if (isNewUser) {
      user.addDomainEvent(new UserCreated(user))
    }
    return hit(user)
  }
}
