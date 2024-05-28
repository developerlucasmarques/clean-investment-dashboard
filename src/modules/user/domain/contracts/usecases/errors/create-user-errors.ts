import { CoreError } from '@/shared/core'

export class EmailInUseError extends CoreError {
  constructor (email: string) {
    super(`Email '${email}' is already in use`)
  }
}
