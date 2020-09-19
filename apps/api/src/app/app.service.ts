import { Injectable } from '@nestjs/common';
import { Message } from '@noxian-forge-monorepo/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
