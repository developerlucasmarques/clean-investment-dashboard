type ValueObjectProps = Record<string, any>

export abstract class ValueObject<T extends ValueObjectProps> {
  protected constructor (private readonly props: T) {}

  public getProp<K extends keyof T>(key: K): T[K] {
    return this.props[key]
  }
}
