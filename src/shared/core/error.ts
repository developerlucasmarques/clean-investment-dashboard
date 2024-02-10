type PropsCoreError = {
  message: string
  name: string
  stack?: string
}

export abstract class CoreError {
  public readonly message: string
  public readonly name: string
  public readonly stack?: string

  protected constructor (props: PropsCoreError) {
    this.message = props.message
    this.name = props.name
    this.stack = props?.stack
  }
}
