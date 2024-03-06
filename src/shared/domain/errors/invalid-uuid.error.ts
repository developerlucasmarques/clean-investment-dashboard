import { CoreError } from '@/shared/core'

export class InvalidUuidError extends CoreError {
  constructor () {
    super('ID must be a valid UUID')
  }
}
