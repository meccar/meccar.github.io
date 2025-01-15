import {
  IAggregateRoot,
  IAggregateRootWithId,
} from '@Domain/Interface/aggregate-root.interface';
import { EntityWithId, Entity } from './entities';

export abstract class BasicAggregateRootWithId<T>
  extends EntityWithId<T>
  implements IAggregateRootWithId<T> {}

export abstract class BasicAggregateRoot
  extends Entity
  implements IAggregateRoot {}
