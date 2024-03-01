import { type AccessToken } from './access-token'

export abstract class Encrypter {
  abstract encrypt (value: string): AccessToken
}
