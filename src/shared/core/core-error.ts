export abstract class CoreError {
  readonly message: string
  readonly name: string

  protected constructor (message: string) {
    const thisClass = Reflect.getPrototypeOf(this) as object

    this.message = message
    this.name = thisClass.constructor.name
    Object.freeze(this)
  }
}
