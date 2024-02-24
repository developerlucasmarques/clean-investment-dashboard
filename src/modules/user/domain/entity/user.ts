import { AggregateRoot, UniqueEntityID } from '@/shared/domain'
import { bad, hit, type Result } from '@/shared/core'
import { UserCreatedDomainEvent } from './events'
import type { CreateUserEntityErrors, DataCreateUser, UserProps } from './user-types'
import { UserEmail, UserName } from './value-objects'

export class User extends AggregateRoot<UserProps> {
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

  public static create (data: DataCreateUser): Result<CreateUserEntityErrors, User> {
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
