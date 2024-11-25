import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return 333', () => {
      expect(appController.getNumber(2)).toBe(3);
    });

    it('should return 5', () => {
      expect(appController.getNumber(4)).toBe(5);
    });
  });
});
