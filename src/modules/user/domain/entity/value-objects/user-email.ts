import { bad, hit, type Result } from '@/shared/core'
import { ValueObject } from '@/shared/domain'
import { UserEmailError } from './errors/value-objects-erros'

export class UserEmail extends ValueObject<{ email: string }> {
  private constructor (email: string) {
    super({ email })
  }

  public static create (email: string): Result<UserEmailError, UserEmail> {
    if (email.length < 5) {
      return bad(new UserEmailError(email))
    }
    return hit(new UserEmail(email))
  }
}
