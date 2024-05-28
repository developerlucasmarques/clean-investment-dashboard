export type Encrypted = {
  value: string
}

export abstract class Encryptor {
  abstract encrypt (value: string): Encrypted
}
