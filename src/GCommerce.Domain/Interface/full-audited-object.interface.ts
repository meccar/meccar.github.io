import { IAuditedObject } from './audited-object.interface';
import { ICreationAuditedObject } from './creation-audited-object.interface';
import { IDeletionAuditedObject } from './deletion-audited-object.interface';
import { IHasCreationTime } from './has-creation-time.interface';
import { IHasDeletionTime } from './has-deletion-time.interface';
import { IHasModificationTime } from './has-modification-time.interface';
import { IMayHaveCreator } from './may-have-creator.interface';
import { IModificationAuditedObject } from './modification-audited-object.interface';
import { ISoftDelete } from './soft-delete.interface';

export interface IFullAuditedObject
  extends IAuditedObject,
    ICreationAuditedObject,
    IHasCreationTime,
    IMayHaveCreator,
    IModificationAuditedObject,
    IHasModificationTime,
    IDeletionAuditedObject,
    IHasDeletionTime,
    ISoftDelete {}
