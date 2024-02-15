export abstract class ValueObject<T extends string | number> {
  protected constructor (private readonly props: T) {
    Object.freeze(this)
  }

  public get value (): T {
    return this.props
  }
}
