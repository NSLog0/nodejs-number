import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getNumber(num: string): number {
    return parseInt(num) + 1;
  }
}
