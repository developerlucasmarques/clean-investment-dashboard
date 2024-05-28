import { Global, Module } from '@nestjs/common'
import { ApplicationService } from './application.service'
import { Application } from '@/shared/core'

@Global()
@Module({
  providers: [
    {
      provide: Application,
      useClass: ApplicationService
    }
  ],
  exports: [
    Application
  ]
})
export class ApplicationModule {}
