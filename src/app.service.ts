import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getNumber(num: number): number {
    return num + 1;
  }
}
