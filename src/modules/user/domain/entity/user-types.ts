import type { UniqueEntityID } from 'shared/domain'
import type { UserEmail, UserName } from './value-objects'
import type { UserEmailError, UserNameError } from './value-objects/errors/value-objects-erros'

export type UserProps = {
  id: UniqueEntityID
  name: UserName
  email: UserEmail
}

export type DataCreateUser = {
  id?: string
  name: string
  email: string
}

export type CreateUserEntityErrors = UserEmailError | UserNameError
