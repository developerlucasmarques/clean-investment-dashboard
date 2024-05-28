import { deepFreeze } from '../utils'

type Props = Record<string, any> | string | number

export abstract class ValueObject<T extends Props> {
  private readonly _value: T

  protected constructor (props: T) {
    this._value = deepFreeze(props)
  }

  get value (): T {
    return this._value
  }

  toString = (): string => {
    if (typeof this.value !== 'object' || this.value === null) {
      try {
        return this.value.toString()
      } catch (e) {
        /* eslint-disable */
        return this.value + ''
      }
    }
    const valueStr = this.value.toString()

    return valueStr === '[object Object]' ? JSON.stringify(this.value) : valueStr
  }
}
