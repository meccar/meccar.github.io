import { Injectable } from '@nestjs/common';

@Injectable()
export class PhoneService {
  getHello(): string {
    return 'Hello World!';
  }
}
