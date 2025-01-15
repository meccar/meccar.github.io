import { ICreationAuditedObject } from './creation-audited-object.interface';
import { IHasCreationTime } from './has-creation-time.interface';
import { IHasModificationTime } from './has-modification-time.interface';
import { IMayHaveCreator } from './may-have-creator.interface';
import { IModificationAuditedObject } from './modification-audited-object.interface';

export interface IAuditedObject
  extends ICreationAuditedObject,
    IHasCreationTime,
    IMayHaveCreator,
    IModificationAuditedObject,
    IHasModificationTime {}
