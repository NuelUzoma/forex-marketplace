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
        package: 'rate', // Rate microservice package
        protoPath: join(__dirname, '../../../protos/rate.proto'), // Path to rate proto file
        url: 'localhost:50054' // Rate microservice listening port
      },
    }
  );

  await microservice.listen();

  // HTTP server
  const app = await NestFactory.create(AppModule);
  
  const port = 3004;
  const globalPrefix = 'api';

  app.setGlobalPrefix(globalPrefix);

  await app.listen(port);
  
  Logger.log(
    `🚀 Rate gRPC Microservice is running on: http://localhost:50054`
  );

  Logger.log(
    `🚀 Rate HTTP Server is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
