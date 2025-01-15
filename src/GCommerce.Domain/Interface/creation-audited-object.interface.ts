import { IHasCreationTime } from './has-creation-time.interface';
import { IMayHaveCreator } from './may-have-creator.interface';

export interface ICreationAuditedObject
  extends IHasCreationTime,
    IMayHaveCreator {}
