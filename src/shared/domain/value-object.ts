type Props = Record<string, any> | string | number

export abstract class ValueObject<T extends Props> {
  protected constructor (private readonly props: T) {
    Object.freeze(this)
  }

  get value (): T {
    return this.props
  }

  toString = (): string => {
    if (typeof this.value !== 'object' || this.value === null) {
      try {
        return this.value.toString()
      } catch (e) {
        /* eslint-disable @typescript-eslint/restrict-plus-operands, @typescript-eslint/no-base-to-string */
        return this.value + ''
      }
    }
    const valueStr = this.value.toString()

    return valueStr === '[object Object]' ? JSON.stringify(this.value) : valueStr
  }
}
