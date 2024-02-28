export interface IController {
  perform: (body?: any) => Promise<any>
}
