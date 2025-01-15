// import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { Phone } from '@Domain/Phones/phone.entity';
// import { getTypeOrmModuleOptions } from './database.config';

// @Module({
//   imports: [
//     TypeOrmModule.forRootAsync({
//       imports: [],
//       inject: [],
//       useFactory: getTypeOrmModuleOptions,
//       // dataSourceFactory: async (options) => {
//       //   return addTransactionalDataSource(new DataSource(options));
//       // },
//     }),
//     TypeOrmModule.forFeature([Phone]),
//   ],
//   exports: [TypeOrmModule],
// })
// export class TypeOrmConfigModule {}
