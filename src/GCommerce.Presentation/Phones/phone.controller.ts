import { Controller, Get } from '@nestjs/common';
import { PhoneService } from '@Application/Phones/phone.service';

@Controller('phone')
export class PhoneController {
  constructor(private readonly appService: PhoneService) {}

  @Get()
  public getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  public FindAll(): string {
    return 'LOL';
  }
}
