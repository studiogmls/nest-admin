import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 加载配置端口
  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT', 3000);
  await app.listen(port);

  // 配置日志
  app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));

  console.log(`Application is running on: http://127.0.0.1:${port}`);
}
bootstrap();
