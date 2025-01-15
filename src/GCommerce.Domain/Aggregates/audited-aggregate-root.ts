import { IAuditedObject } from '@Domain/Interface/audited-object.interface';
import {
  CreationAuditedAggregateRoot,
  CreationAuditedAggregateRootWithId,
} from './creation-audited-aggregate-root';

export abstract class AuditedAggregateRootWithId<T>
  extends CreationAuditedAggregateRootWithId<T>
  implements IAuditedObject
{
  lastModificationTime: Date;
  lastModifierId: string;
}

export abstract class AuditedAggregateRoot
  extends CreationAuditedAggregateRoot
  implements IAuditedObject
{
  lastModificationTime: Date;
  lastModifierId: string;
}
