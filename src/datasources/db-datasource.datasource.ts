import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'DbDatasource',
  connector: 'mongodb',
  url: 'mongodb+srv://cluster0.nqujh.mongodb.net/PeliculasAdmon',
  host: 'cluster0.nqujh.mongodb.net',
  port: 27017,
  user: 'Admin',
  password: '99094681Aa',
  database: 'Peliculas',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class DbDatasourceDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'DbDatasource';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.DbDatasource', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
