import {DefaultCrudRepository} from '@loopback/repository';
import {Todo, TodoRelations} from '../models/todo.model';
import {DbDatasourceDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TodoRepository extends DefaultCrudRepository<
  Todo,
  typeof Todo.prototype.id,
  TodoRelations
> {
  constructor(
    @inject('datasources.DbDatasource') dataSource: DbDatasourceDataSource,
  ) {
    super(Todo, dataSource);
  }
}
