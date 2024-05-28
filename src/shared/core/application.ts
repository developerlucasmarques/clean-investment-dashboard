export abstract class Application {
  abstract run<T>(callback: () => Promise<T>): Promise<T>
}
