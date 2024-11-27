import { Controller, Get, HttpCode, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @HttpCode(200)
  getHello(): string {
    return 'Hello World!';
  }

  @Get('/square')
  @HttpCode(200)
  squareNumber(@Query('num') num: string): number {
    return this.appService.squareNumber(num);
  }

  @Get('/cube')
  @HttpCode(200)
  cubeNumber(@Query('num') num: string): number {
    return this.appService.cubeNumber(num);
  }

  @Get('/env')
  getEnv(): string {
    return `env: ${process.env.env}, appVersion: ${process.env.appVersion}`;
  }
}
