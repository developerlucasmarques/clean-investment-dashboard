import { CoreError } from '@/shared/core'

export class EmailInUseError extends CoreError {
  public constructor (email: string) {
    super(`Email '${email}' is alreary in use`)
  }
}
