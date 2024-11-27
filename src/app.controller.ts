import { Controller, Get, HttpCode, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @HttpCode(200)
  getHello(): string {
    return 'Hello World!';
  }

  @Get('/square/:num')
  @HttpCode(200)
  squareNumber(@Param('num') num: string): number {
    return this.appService.squareNumber(num);
  }

  @Get('/cube/:num')
  @HttpCode(200)
  cubeNumber(@Param('num') num: string): number {
    return this.appService.cubeNumber(num);
  }

  @Get('/env')
  getEnv(): string {
    return `env: ${process.env.env}, appVersion: ${process.env.appVersion}`;
  }
}
