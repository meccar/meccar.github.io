import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const getTypeOrmModuleOptions = (config: any): TypeOrmModuleOptions =>
  ({
    type: 'mysql',
    entities: ['dist/GCommerce.Domain/Phones/*.entity.js'],
    logging:
      process.env.NODE_ENV === 'local' ? config.getTypeORMLogging() : false,
    synchronize:
      process.env.NODE_ENV === 'local' ? config.getTypeORMSync() : false,
    migrationsRun:
      process.env.NODE_ENV === 'local'
        ? config.getTypeORMMigrationsRun()
        : false,
    schema: config.getDatabaseSchema(),
    migrations: ['dist/GCommerce.Persistance/Migrations/**/*.js'],
    migrationsTableName: 'history',
    replication: {
      master: {
        host: config.getDatabaseHost(),
        port: config.getDatabasePort(),
        username: config.getDatabaseUser(),
        password: config.getDatabasePassword(),
        database: config.getDatabaseName(),
      },
      slaves: [
        {
          host: config.getDatabaseHost(),
          port: config.getDatabasePort(),
          username: config.getDatabaseUser(),
          password: config.getDatabasePassword(),
          database: config.getDatabaseName(),
        },
      ],
    },
    seedTracking: true,
    seeds: ['dist/database/seeds/**/*{.ts,.js}'],
    factories: ['dist/database/factories/**/*{.ts,.js}'],
  }) as TypeOrmModuleOptions;
