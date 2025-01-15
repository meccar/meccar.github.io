import { IEntity } from './entity.interface';
import { IEntityWithId } from './entity`1.interface';

export interface IAggregateRootWithId<T>
  extends IEntityWithId<T>,
    IEntity,
    IAggregateRoot {}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface IAggregateRoot extends IEntity {}
