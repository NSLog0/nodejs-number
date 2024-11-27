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

  describe('square number', () => {
    it('it should return 4', () => {
      expect(appController.squareNumber('2')).toBe(4);
    });

    it('it should return 8', () => {
      expect(appController.squareNumber('4')).toBe(8);
    });
  });

  describe('cube number', () => {
    it('it should return 6', () => {
      expect(appController.cubeNumber('2')).toBe(6);
    });

    it('it should return 12', () => {
      expect(appController.cubeNumber('4')).toBe(12);
    });
  });
});
