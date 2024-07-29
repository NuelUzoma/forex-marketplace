import { join } from 'path';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const microservice = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'wallet', // Wallet microservice package
        protoPath: join(__dirname, '../../../protos/wallet.proto'), // Path to wallet proto file
        url: 'localhost:50052' // Wallet microservice listening port
      },
    }
  );

  await microservice.listen();

  // HTTP server
  const app = await NestFactory.create(AppModule);

  const port = 3002;
  const globalPrefix = 'api';

  app.setGlobalPrefix(globalPrefix);

  await app.listen(port);
  
  Logger.log(
    `🚀 Wallet gRPC Microservice is running on: http://localhost:50052`
  );

  Logger.log(
    `🚀 Wallet HTTP Server is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
