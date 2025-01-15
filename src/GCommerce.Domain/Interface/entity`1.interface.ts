import { IEntity } from './entity.interface';

export interface IEntityWithId<T> extends IEntity {
  id: T;
}
