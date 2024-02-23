import { CoreError } from '@/shared/util'

export class UserEmailError extends CoreError {
  public constructor (userEmail: string) {
    super({
      message: `User email: ${userEmail} is invalid`,
      name: 'UserEmailError'
    })
  }
}
