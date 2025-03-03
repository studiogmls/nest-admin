import { Controller, Get, HttpException, Logger } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private readonly logger: Logger) {}

  @Get()
  getHello(): string {
    let err = 1;
    this.logger.error('test');
    if (err) {
      throw new HttpException('test', 500);
    }
    return 'Hello World!';
  }
}
