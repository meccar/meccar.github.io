import { IEntity } from '@Domain/Interface/entity.interface';
import { IEntityWithId } from '@Domain/Interface/entity`1.interface';

export abstract class Entity implements IEntity {
  public abstract getKeys(): (object | null)[];
}

export abstract class EntityWithId<T> implements Entity, IEntityWithId<T> {
  public id: T;

  public getKeys(): (any | null)[] {
    return [this.id];
  }
}
