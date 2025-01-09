import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  squareNumber(num: string): number {
    return parseInt(num) * 2;
  }

  cubeNumber(num: string): number {
    return parseInt(num) * 3;
  }
}
