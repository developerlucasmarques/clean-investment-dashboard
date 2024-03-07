import { UniqueEntityId } from './unique-entity-id'

export abstract class Entity<T> {
  private readonly _uniqueEntityId: UniqueEntityId

  protected constructor (
    protected readonly props: T, id?: UniqueEntityId
  ) {
    this._uniqueEntityId = id ?? UniqueEntityId.create().value as UniqueEntityId
  }

  get id (): string {
    return this._uniqueEntityId.value
  }

  toJSON (): Required<{ id: string } & T> {
    /* eslint-disable */
    return {
      id: this.id,
      ...this.props
    } as Required<{ id: string } & T>
  }
}
