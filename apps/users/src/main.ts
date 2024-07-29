import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'user', // User microservice package
        protoPath: join(__dirname, '../../../protos/user.proto'), // Path to user proto file
        url: '0.0.0.0:50051' // User microservice listening port
      }
    }
  );
  
  const globalPrefix = 'api';
  
  await app.listen();
  
  Logger.log(
    `🚀 User Microservice is running on: http://localhost:50051/${globalPrefix}`
  );
}

bootstrap();
