import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('Restaurant')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('Restaurant')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document, {
    explorer: true,
    swaggerOptions: {
      filter: true,
      showRequestDuration: true,
    },
  });

  app.enableCors();
  app.use('/uploads', express.static('uploads'));
  await app.listen(3000);
  console.log(__dirname);
}

bootstrap();
