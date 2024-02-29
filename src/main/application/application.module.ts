import { DomainEventManager } from '@/shared/domain/events'
import { Global, Module } from '@nestjs/common'
import { ApplicationService } from './application.service'
import { DomainEventManagerEventEmmiter } from './event-manager/domain-event-manager-event-emmiter'

@Global()
@Module({
  providers: [
    ApplicationService,
    {
      provide: DomainEventManager,
      useClass: DomainEventManagerEventEmmiter
    }
  ],
  exports: [
    ApplicationService
  ]
})
export class ApplicationModule {}
