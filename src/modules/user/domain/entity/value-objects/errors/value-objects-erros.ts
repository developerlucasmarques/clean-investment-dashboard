import { CoreError } from 'shared/core'

export class UserEmailError extends CoreError {
  constructor (userEmail: string) {
    super(`User email: '${userEmail}' is invalid`)
  }
}

export class UserNameError extends CoreError {
  constructor (userName: string) {
    super(`User name: '${userName}' is invalid`)
  }
}
