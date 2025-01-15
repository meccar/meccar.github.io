import { IDatabase } from '@Domain/Database/database.interface';
import { Database } from '@Domain/Database/database.service';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
// JWTConfig,
// MailerConfig,
// QueueConfig,
// FirebaseConfig
export class EnvironmentConfigService implements IDatabase {
  private database: Database;

  constructor(private configService: ConfigService) {
    this.database = new Database(configService);
  }
  // Mailer
  getMailerFrom(): string {
    return this.configService.get<string>('MAIL_FROM');
  }
  getMailerHost(): string {
    return this.configService.get<string>('MAIL_HOST');
  }
  getMailerPort(): number {
    return parseInt(this.configService.get<string>('MAIL_PORT'));
  }
  getMailerUser(): string {
    return this.configService.get<string>('MAIL_USER');
  }
  getMailerPassword(): string {
    return this.configService.get<string>('MAIL_PASSWORD');
  }
  getResetPasswordLink(): string {
    return this.configService.get<string>('RESET_PASSWORD_LINK');
  }

  // JWT
  getJwtSecret(): string {
    return this.configService.get<string>('ACCESS_TOKEN_SECRET');
  }
  getJwtExpirationTime(): string {
    return this.configService.get<string>('ACCESS_TOKEN_EXPIRES_IN');
  }
  getJwtRefreshSecret(): string {
    return this.configService.get<string>('REFRESH_TOKEN_SECRET');
  }
  getJwtRefreshCookieKey(): string {
    return this.configService.get<string>('REFRESH_TOKEN_COOKIE_KEY');
  }
  getJwtRefreshExpirationTime(): string {
    return this.configService.get<string>('REFRESH_TOKEN_EXPIRES_IN');
  }
  getJwtRefreshTokenCookieMaxAge(): string {
    return this.configService.get<string>('REFRESH_TOKEN_COOKIE_MAX_AGE');
  }
  getJwtType(): string {
    return this.configService.get<string>('TOKEN_TYPE');
  }
  getJwtPasswordExpirationTime(): string {
    return this.configService.get<string>('RESET_PASSWORD_LINK_EXPIRES_IN');
  }
  getJwtPasswordSecret(): string {
    return this.configService.get<string>('RESET_PASSWORD_SECRET');
  }

  // Database
  getDatabaseHost(): string {
    return this.database.getDatabaseHost();
  }

  getDatabasePort(): number {
    return this.database.getDatabasePort();
  }

  getDatabaseUser(): string {
    return this.database.getDatabaseUser();
  }

  getDatabasePassword(): string {
    return this.database.getDatabasePassword();
  }

  getDatabaseName(): string {
    return this.database.getDatabaseName();
  }

  getDatabaseSchema(): string {
    return this.database.getDatabaseSchema();
  }

  // Type ORM
  getTypeORMSync(): boolean {
    return this.database.getTypeORMSync();
  }

  getTypeORMLogging(): boolean {
    return this.database.getTypeORMLogging();
  }

  getTypeORMMigrationsRun(): boolean {
    return this.database.getTypeORMMigrationsRun();
  }

  // Queue
  getQueueExchangeType(): string {
    return this.configService.get<string>('QUEUE_EXCHANGE_TYPE');
  }
  getQueueExchangeName(): string {
    return this.configService.get<string>('QUEUE_EXCHANGE_NAME');
  }
  getQueueExchangeTimeout(): number {
    return +this.configService.get<number>('QUEUE_TIMEOUT');
  }
  getQueueUsername(): string {
    return this.configService.get<string>('QUEUE_USERNAME');
  }
  getQueuePassword(): string {
    return this.configService.get<string>('QUEUE_PASSWORD');
  }
  getQueueHost(): string {
    return this.configService.get<string>('QUEUE_HOST');
  }
  getQueuePort(): number {
    return +this.configService.get<string>('QUEUE_PORT');
  }
  getQueueUri(): string {
    return `amqp://${this.getQueueUsername()}:${this.getQueuePassword()}@${this.getQueueHost()}:${this.getQueuePort()}`;
  }

  // Firebase
  getFirebaseProjectId(): string {
    return this.configService.get<string>('FIREBASE_PROJECT_ID');
  }
  getFirebasePrivateKey(): string {
    return this.configService
      .get<string>('FIREBASE_PRIVATE_KEY')
      .replace(/\\n/gm, '\n');
  }
  getFirebaseClientEmail(): string {
    return this.configService.get<string>('FIREBASE_CLIENT_EMAIL');
  }
  getFirebaseStorageBucket(): string {
    return this.configService.get<string>('FIREBASE_STORAGE_BUCKET');
  }
}
