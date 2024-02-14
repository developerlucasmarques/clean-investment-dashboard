import { bad, hit, type Result } from '@/shared/core'
import { ValueObject } from '@/shared/domain'
import { UserEmailError } from './errors'

export type UserEmailProps = {
  email: string
}

export class UserEmail extends ValueObject<UserEmailProps> {
  private constructor (email: string) {
    super({ email })
  }

  public create ({ email }: UserEmailProps): Result<UserEmailError, UserEmail> {
    if (email.length < 5) {
      return bad(new UserEmailError(email))
    }
    return hit(new UserEmail(email))
  }
}
