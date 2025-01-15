import { IHasModificationTime } from './has-modification-time.interface';

export interface IModificationAuditedObject extends IHasModificationTime {
  lastModifierId: string;
}
