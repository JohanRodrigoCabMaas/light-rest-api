import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { initSwagger } from './app.swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;
  const logger = new Logger('Bootstrap App Init');

  initSwagger(app);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  app.enableCors();

  await app.listen(port);

  logger.log(`App are listen on port ${port}`);
  logger.log(`Server is running at ${await app.getUrl()}`);
}

bootstrap();
