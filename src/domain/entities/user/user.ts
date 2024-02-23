import { bad, hit, type Result } from '@/shared/util'
import { AgregateRoot, UniqueEntityID } from '@/shared/domain'
import { UserCreatedDomainEvent } from './events'
import type { DataCreateUser, UserProps } from './user-types'
import { UserEmail, UserName } from './value-objects'
import type { UserEmailError, UserNameError } from './value-objects/errors'

export class User extends AgregateRoot<UserProps> {
  private constructor (props: UserProps) {
    super(props)
    Object.freeze(this)
  }

  public get id (): UniqueEntityID {
    return this.props.id
  }

  public get name (): UserName {
    return this.props.name
  }

  public get email (): UserEmail {
    return this.props.email
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
      user.addDomainEvent(new UserCreatedDomainEvent(user))
    }
    return hit(user)
  }
}
