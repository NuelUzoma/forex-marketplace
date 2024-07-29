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
        package: 'wallet', // Wallet microservice package
        protoPath: join(__dirname, '../../../protos/wallet.proto'), // Path to wallet proto file
        url: '0.0.0.0:50052' // Wallet microservice listening port
      },
    }
  );

  const globalPrefix = 'api';

  await app.listen();
  
  Logger.log(
    `🚀 Wallet Microservice is running on: http://localhost:50052/${globalPrefix}`
  );
}

bootstrap();
