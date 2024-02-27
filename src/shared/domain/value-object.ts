export abstract class ValueObject<T extends Record<string, any>> {
  protected constructor (private readonly props: T) {
    Object.freeze(this)
  }

  get value (): T {
    return this.props
  }
}
