export interface IUseCase<in T, out K> {
  execute: (input: T) => Promise<K>
}
