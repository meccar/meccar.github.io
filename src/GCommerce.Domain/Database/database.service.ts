import { ConfigService } from '@nestjs/config';
import { IDatabase } from './database.interface';

export class Database implements IDatabase {
  constructor(private configService: ConfigService) {}

  // Database
  getDatabaseHost(): string {
    return this.configService.get<string>('DB_HOST');
  }
  getDatabasePort(): number {
    return parseInt(this.configService.get<string>('DB_PORT'));
  }
  getDatabaseUser(): string {
    return this.configService.get<string>('DB_USERNAME');
  }
  getDatabasePassword(): string {
    return this.configService.get<string>('DB_PASSWORD');
  }
  getDatabaseName(): string {
    return this.configService.get<string>('DB_DATABASE');
  }
  getDatabaseSchema(): string {
    return this.configService.get<string>('DB_SCHEMA');
  }

  // Type ORM
  getTypeORMSync(): boolean {
    return this.configService.get<string>('TYPEORM_SYNCHRONIZE') === 'true';
  }
  getTypeORMLogging(): boolean {
    return this.configService.get<string>('TYPEORM_LOGGING') === 'true';
  }
  getTypeORMMigrationsRun(): boolean {
    return this.configService.get<string>('TYPEORM_MIGRATIONSRUN') === 'true';
  }
}
