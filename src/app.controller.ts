import { Controller, Get, HttpCode, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @HttpCode(200)
  getNumber(@Query('num') num: string): number {
    return this.appService.getNumber(num);
  }

  @Get('/env')
  getEnv(): string {
    return `env: ${process.env.env}, appVersion: ${process.env.appVersion}`;
  }
}
