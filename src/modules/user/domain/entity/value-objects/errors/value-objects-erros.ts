import { CoreError } from '@/shared/core'

export class UserEmailError extends CoreError {
  public constructor (userEmail: string) {
    super(`User email: '${userEmail}' is invalid`)
  }
}

export class UserNameError extends CoreError {
  public constructor (userName: string) {
    super(`User name: '${userName}' is invalid`)
  }
}
