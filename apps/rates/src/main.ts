import { join } from 'path';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'rate', // Rate microservice package
        protoPath: join(__dirname, '../../../protos/rate.proto'), // Path to rate proto file
        url: '0.0.0.0:50054' // Rate microservice listening port
      },
    }
  );
  
  const globalPrefix = 'api';

  await app.listen();
  
  Logger.log(
    `🚀 Rate Application is running on: http://localhost:50054/${globalPrefix}`
  );
}

bootstrap();
