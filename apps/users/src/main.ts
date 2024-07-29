import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  // gRPC microservice
  const microservice = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'user', // User microservice package
        protoPath: join(__dirname, '../../../protos/user.proto'), // Path to user proto file
        url: 'localhost:50051' // User microservice listening port
      }
    }
  );
  
  await microservice.listen();

  // HTTP server
  const app = await NestFactory.create(AppModule);
  
  const port = 3001;
  const globalPrefix = 'api';

  app.setGlobalPrefix(globalPrefix);

  await app.listen(port);
  
  Logger.log(
    `🚀 User gRPC Microservice is running on: http://localhost:50051`
  );

  Logger.log( 
    `🚀 User HTTP Server is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
