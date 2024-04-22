import { Process, Processor } from '@nestjs/bull';
import { QUEUES } from '../constants';
import { Job } from 'bull';
import { Logger } from '@nestjs/common';

@Processor(QUEUES.encrypt)
export class EncryptConsumer {
  private readonly logger = new Logger(EncryptConsumer.name);

  @Process()
  async encrypt(job: Job<any>) {
    this.logger.log('Job id: ' + job.id);
    this.logger.debug(JSON.stringify(job));

    /** Simulate long running job */
    await new Promise((resolve) => setTimeout(resolve, 4000));

    this.logger.log('Job done: ' + job.id);
  }
}
