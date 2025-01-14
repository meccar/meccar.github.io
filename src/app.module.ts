import { Module } from '@nestjs/common';
import { PhoneController } from '@Presentation/Phones/phone.controller';
import { PhoneService } from '@Application/Phones/phone.service';

@Module({
  imports: [],
  controllers: [PhoneController],
  providers: [PhoneService],
})
export class AppModule {}
