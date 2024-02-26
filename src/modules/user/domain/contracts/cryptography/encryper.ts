import { type AccessToken } from './access-token'

export interface Encrypter {
  encrypt: (value: string) => AccessToken
}
