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
        package: 'transaction', // Transaction-Order microservice package
        protoPath: join(__dirname, '../../../protos/transaction.proto'), // Path to proto file
        url: 'localhost:50053' // Transaction-Order microservice listening port
      },
    }
  );

  await microservice.listen();

  // HTTP server
  const app = await NestFactory.create(AppModule);
  
  const port = 3003;
  const globalPrefix = 'api';

  app.setGlobalPrefix(globalPrefix);

  await app.listen(port);
  
  Logger.log(
    `🚀 Transaction-Order gRPC Microservice is running on: http://localhost:50053`
  );

  Logger.log(
    `🚀 Transaction-Order HTTP Server is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
