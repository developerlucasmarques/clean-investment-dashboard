import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import env from './configs/env'
import { HttpExceptionFilter } from './filters/http-exception.filter'

async function bootstrap (): Promise<void> {
  const app = await NestFactory.create(AppModule)

  app.useGlobalFilters(new HttpExceptionFilter())
  await app.listen(env.port)
}

bootstrap()
  .catch(console.error)
