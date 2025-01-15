import { IHasDeletionTime } from './has-deletion-time.interface';
import { ISoftDelete } from './soft-delete.interface';

export interface IDeletionAuditedObject extends IHasDeletionTime, ISoftDelete {
  DeleterId: string;
}
