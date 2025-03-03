import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { WinstonModule } from 'nest-winston';
import createRotateTransport, {
  consoleTransports,
} from './createRotateTransport';

@Module({
  imports: [
    WinstonModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const logOn = configService.get('LOG_ON') === 'true';

        return {
          transports: [consoleTransports],
          ...(logOn
            ? [
                createRotateTransport('info', 'appliacation'),
                createRotateTransport('warn', 'error'),
              ]
            : []),
        };
      },
    }),
  ],
})
export class LoggerModule {}
