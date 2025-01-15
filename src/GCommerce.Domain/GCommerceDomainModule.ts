import { GCommerceApplicationModule } from '@Application/GCommerceApplicationModule';
import { Module } from '@nestjs/common';

@Module({
  imports: [GCommerceApplicationModule],
  exports: [],
})
export class GCommerceDomainModule {}
