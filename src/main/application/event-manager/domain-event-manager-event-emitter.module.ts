import { DomainEventManager } from '@/shared/domain/events'
import { Global, Module } from '@nestjs/common'
import { DomainEventManagerEventEmitter } from './domain-event-manager-event-emitter'

@Global()
@Module({
  providers: [
    {
      provide: DomainEventManager,
      useClass: DomainEventManagerEventEmitter
    }
  ],
  exports: [
    DomainEventManager
  ]
})
export class DomainEventManagerModule {}
