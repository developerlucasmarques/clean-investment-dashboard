import * as crypto from 'crypto'
export class UniqueEntityID {
  constructor (private readonly id?: string) {
    if (!id) {
      this.id = crypto.randomUUID()
    }
    Object.freeze(this)
  }

  get value (): string {
    return this.id as unknown as string
  }
}
