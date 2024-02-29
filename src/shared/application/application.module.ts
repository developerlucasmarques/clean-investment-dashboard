import { Global, Module } from '@nestjs/common'
import { ApplicationService } from './application.service'
import { DomainEventManagerEventEmmiter } from './domain-event-manager.application'

@Global()
@Module({
  providers: [
    ApplicationService,
    DomainEventManagerEventEmmiter
  ],
  exports: [
    ApplicationService,
    DomainEventManagerEventEmmiter
  ]
})
export class ApplicationModule {}
