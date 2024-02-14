import { CoreError } from '@/shared/core'

export class UserNameError extends CoreError {
  public constructor (userName: string) {
    super({
      message: `User name: ${userName} is invalid`,
      name: 'UserNameError'
    })
  }
}
