export abstract class IUseCase<in T, out K> {
  abstract execute: (input: T) => Promise<K>
}
