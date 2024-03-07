import type { UserEmail, UserName } from './value-objects'
import type { UserEmailError, UserNameError } from './value-objects/errors/value-objects-errors'

export type UserProps = {
  name: UserName
  email: UserEmail
}

export type CreateUserEntityInput = {
  id?: string
  name: string
  email: string
}

export type CreateUserEntityErrors = UserEmailError | UserNameError
