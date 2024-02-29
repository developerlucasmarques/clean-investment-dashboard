import { Global, Module } from '@nestjs/common'
import { ApplicationService } from './application.service'

@Global()
@Module({
  providers: [
    ApplicationService
  ],
  exports: [
    ApplicationService
  ]
})
export class ApplicationModule {}
