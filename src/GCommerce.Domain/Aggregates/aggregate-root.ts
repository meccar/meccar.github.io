import { IHasConcurrencyStamp } from '@Domain/Interface/has-concurrency-stamp.interface';
import {
  BasicAggregateRoot,
  BasicAggregateRootWithId,
} from './basic-aggregate-root';
import { Guid } from 'guid-typescript';

export abstract class AggregateRootWithId<T>
  extends BasicAggregateRootWithId<T>
  implements IHasConcurrencyStamp
{
  concurrencyStamp: string;
}

export abstract class AggregateRoot
  extends BasicAggregateRoot
  implements IHasConcurrencyStamp
{
  public concurrencyStamp: string;

  constructor() {
    super();
    this.concurrencyStamp = Guid.create().toString();
  }
}
