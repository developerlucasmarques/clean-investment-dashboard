import { type AccessToken } from './access-token'

export abstract class IEncrypter {
  abstract encrypt (value: string): AccessToken
}
