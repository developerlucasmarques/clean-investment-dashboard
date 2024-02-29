import { DomainEventManager } from '@/shared/domain/events'
import { Global, Module } from '@nestjs/common'
import { DomainEventManagerEventEmmiter } from './domain-event-manager-event-emmiter'

@Global()
@Module({
  providers: [
    {
      provide: DomainEventManager,
      useClass: DomainEventManagerEventEmmiter
    }
  ],
  exports: [
    DomainEventManager
  ]
})
export class DomainEventManagerModule {}
