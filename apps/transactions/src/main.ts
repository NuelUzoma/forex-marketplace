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
        package: 'transaction', // Transaction-Order microservice package
        protoPath: join(__dirname, '../../../protos/transaction.proto'), // Path to proto file
        url: '0.0.0.0:50053' // Transaction-Order microservice listening port
      },
    }
  );
  
  const globalPrefix = 'api';

  await app.listen();
  
  Logger.log(
    `🚀 Transaction-Order Application is running on: http://localhost:50053/${globalPrefix}`
  );
}

bootstrap();
