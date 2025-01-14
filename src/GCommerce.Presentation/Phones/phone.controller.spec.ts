import { Test, TestingModule } from '@nestjs/testing';
import { PhoneController } from './phone.controller';
import { PhoneService } from '@Application/Phones/phone.service';

describe('AppController', () => {
  let appController: PhoneController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PhoneController],
      providers: [PhoneService],
    }).compile();

    appController = app.get<PhoneController>(PhoneController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
