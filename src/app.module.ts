import { Module } from '@nestjs/common';
import { PhoneController } from '@Presentation/Phones/phone.controller';
import { PhoneService } from '@Application/Phones/phone.service';
import { GCommercePersistanceModule } from '@Persistance/GCommercePersistanceModule';
import { GCommerceApplicationModule } from '@Application/GCommerceApplicationModule';
import { GCommerceApplicationContractsModule } from '@Application.Contracts/GCommerceApplicationContractsModule';
import { GCommerceDbMigratorContractsModule } from '@DbMigrator/GCommerceDbMigratorModule';
import { GCommerceDomainModule } from '@Domain/GCommerceDomainModule';
import { GCommerceDomainSharedModule } from '@Domain.Shared/GCommerceDomainSharedModule';
import { GCommercePresentationModule } from '@Presentation/GCommercePresentationModule';

@Module({
  imports: [
    GCommerceDomainModule,
    GCommerceDomainSharedModule,
    GCommercePersistanceModule,
    GCommerceApplicationModule,
    GCommerceApplicationContractsModule,
    GCommerceDbMigratorContractsModule,
    GCommercePresentationModule,
  ],
  controllers: [PhoneController],
  providers: [PhoneService],
})
export class AppModule {}
