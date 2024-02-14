type PropsCoreError = {
  message: string
  name: string
}

export abstract class CoreError {
  public readonly message: string
  public readonly name: string

  protected constructor (props: PropsCoreError) {
    this.message = props.message
    this.name = props.name
  }
}
