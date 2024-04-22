import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { QUEUES } from './constants';

@Injectable()
export class AppService {
  constructor(
    @InjectQueue(QUEUES.encrypt) private readonly encryptQueue: Queue,
  ) {}
  health(): string {
    return 'Ok';
  }
  async encrypt() {
    this.encryptQueue.add(
      { fileName: './file.txt' },
      {
        timeout: 10000,
      },
    );
  }
}
