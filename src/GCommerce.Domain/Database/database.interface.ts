export interface IDatabase {
  getDatabaseHost(): string;
  getDatabasePort(): number;
  getDatabaseUser(): string;
  getDatabasePassword(): string;
  getDatabaseName(): string;
  getDatabaseSchema(): string;
  getTypeORMSync(): boolean;
  getTypeORMLogging(): boolean;
  getTypeORMMigrationsRun(): boolean;
}
