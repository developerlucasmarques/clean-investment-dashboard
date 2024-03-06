import { AggregateRoot, UniqueEntityId } from '@/shared/domain'
import { left, right, type Either } from '@/shared/core'
import { UserCreatedDomainEvent } from './events'
import type { CreateUserEntityErrors, CreateUserEntityInput, UserProps } from './user-types'
import { UserEmail, UserName } from './value-objects'

export class User extends AggregateRoot<UserProps> {
  private constructor (props: UserProps) {
    super(props)
  }

  get id (): UniqueEntityId {
    return this.props.id
  }

  get name (): UserName {
    return this.props.name
  }

  get email (): UserEmail {
    return this.props.email
  }

  static create (data: CreateUserEntityInput): Either<CreateUserEntityErrors, User> {
    const { email, name } = data
    const nameOrError = UserName.create(name)
    const emailOrError = UserEmail.create(email)
    const idOrError = UniqueEntityId.create(data.id)

    for (const result of [nameOrError, emailOrError, idOrError]) {
      if (result.isLeft()) {
        return left(result.value)
      }
    }

    const user = new User({
      id: idOrError.value as UniqueEntityId,
      name: nameOrError.value as UserName,
      email: emailOrError.value as UserEmail
    })

    const isNewUser = !data.id

    if (isNewUser) {
      user.addDomainEvent(new UserCreatedDomainEvent(user))
    }
    return right(user)
  }
}
