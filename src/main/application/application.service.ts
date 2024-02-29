import { DomainEventManager } from '@/shared/domain/events'
import { EntityManager } from '@mikro-orm/postgresql'
import { Injectable } from '@nestjs/common'
import type { Application, IDbEntity } from '../../shared/core'

@Injectable()
export class ApplicationService implements Application {
  constructor (
    private readonly entityManager: EntityManager,
    private readonly domainEventManager: DomainEventManager
  ) {}

  async finish (): Promise<void> {
    const unitOfWork = this.entityManager.getUnitOfWork()
    const entities = [
      ...unitOfWork.getPersistStack() as unknown as IDbEntity[],
      ...unitOfWork.getRemoveStack() as unknown as IDbEntity[]
    ]

    for (const entity of entities) {
      await this.domainEventManager.publishDomainEvent(entity.aggregate)
    }
    await this.entityManager.flush()
  }

  async run<T>(callback: () => Promise<T>): Promise<T> {
    try {
      const result = await callback()

      await this.finish()
      return result
    } catch (error: any) {
      this.fail(error)
      throw error
    }
  }

  fail (error: any): void {
    console.log('FAIL', error)
  }
}
