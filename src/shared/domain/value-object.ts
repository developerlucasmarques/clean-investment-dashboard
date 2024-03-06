type props = Record<string, any> | string | number

export abstract class ValueObject<T extends props> {
  protected constructor (private readonly props: T) {
    Object.freeze(this)
  }

  get value (): T {
    return this.props
  }
}
