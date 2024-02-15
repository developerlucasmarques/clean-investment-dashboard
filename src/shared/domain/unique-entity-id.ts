export class UniqueEntityID {
  public constructor (private readonly id?: string) {
    if (!id) {
      this.id = crypto.randomUUID()
    }
  }
}
