import { type AccessToken } from './access-token'

export interface IEncrypter {
  encrypt: (value: string) => AccessToken
}
