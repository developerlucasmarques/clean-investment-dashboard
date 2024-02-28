import { left, right, type Either } from '@/shared/core'
import { ValueObject } from '@/shared/domain'
import { UserEmailError } from './errors/value-objects-erros'

export class UserEmail extends ValueObject<{ email: string }> {
  private constructor (email: string) {
    super({ email })
  }

  static create (email: string): Either<UserEmailError, UserEmail> {
    if (email.length < 5) {
      return left(new UserEmailError(email))
    }
    return right(new UserEmail(email))
  }
}
