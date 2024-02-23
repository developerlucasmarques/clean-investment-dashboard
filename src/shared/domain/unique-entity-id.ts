import * as crypto from 'crypto'
export class UniqueEntityID {
  public constructor (private readonly id?: string) {
    if (!id) {
      this.id = crypto.randomUUID()
    }
    Object.freeze(this)
  }

  public get value (): string {
    return this.id as string
  }
}
