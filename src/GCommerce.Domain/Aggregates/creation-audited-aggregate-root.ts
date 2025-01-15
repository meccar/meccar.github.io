import { ICreationAuditedObject } from '@Domain/Interface/creation-audited-object.interface';
import { AggregateRoot, AggregateRootWithId } from './aggregate-root';

export abstract class CreationAuditedAggregateRootWithId<T>
  extends AggregateRootWithId<T>
  implements ICreationAuditedObject
{
  creationTime: Date;
  creatorId: string;
}

export abstract class CreationAuditedAggregateRoot
  extends AggregateRoot
  implements ICreationAuditedObject
{
  creationTime: Date;
  creatorId: string;
}
