export interface UseCase<in T, out R> {
  execute: (input: T) => Promise<R>
}
