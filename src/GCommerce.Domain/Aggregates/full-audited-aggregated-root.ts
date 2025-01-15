import { IFullAuditedObject } from '@Domain/Interface/full-audited-object.interface';
import {
  AuditedAggregateRoot,
  AuditedAggregateRootWithId,
} from './audited-aggregate-root';

export abstract class FullAuditedAggregateRootWithId<T>
  extends AuditedAggregateRootWithId<T>
  implements IFullAuditedObject
{
  DeleterId: string;
  isdeleted: boolean;
  isDelete: boolean;
  deleterId: string;
  deletionTime: Date;
}

export abstract class FullAuditedAggregateRoot
  extends AuditedAggregateRoot
  implements IFullAuditedObject
{
  creationTime: Date;
  creatorId: string;
  lastModifierId: string;
  lastModificationTime: Date;
  DeleterId: string;
  isdeleted: boolean;
  isDelete: boolean;
  deleterId: string;
  deletionTime: Date;
}
