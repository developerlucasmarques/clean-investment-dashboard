import { v4 as uuidV4, validate as validateUuid } from 'uuid'
import { right, type Either, left } from '../core'
import { InvalidUuidError } from './errors'
import { ValueObject } from './value-object'
export class UniqueEntityId extends ValueObject<string> {
  private constructor (id: string) {
    super(id)
  }

  static create (id?: string): Either<InvalidUuidError, UniqueEntityId> {
    if (id) {
      if (!UniqueEntityId.validate(id)) {
        return left(new InvalidUuidError())
      }
      return right(new UniqueEntityId(id))
    }

    return right(
      new UniqueEntityId(uuidV4())
    )
  }

  private static validate (id: string): boolean {
    return validateUuid(id)
  }
}
