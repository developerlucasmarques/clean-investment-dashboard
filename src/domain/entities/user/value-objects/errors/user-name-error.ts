import { CoreError } from '@/shared/util'

export class UserNameError extends CoreError {
  public constructor (userName: string) {
    super({
      message: `User name: ${userName} is invalid`,
      name: 'UserNameError'
    })
  }
}
