import { type AccessToken } from './access-token'

export abstract class AbstEncrypter {
  abstract encrypt (value: string): AccessToken
}
