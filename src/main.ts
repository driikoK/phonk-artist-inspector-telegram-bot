import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { readFileSync } from 'fs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {});

  app.enableCors();

  await app.listen(80 || 3100);
}
bootstrap();
