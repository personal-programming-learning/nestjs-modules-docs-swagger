import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Para ignorar los campos que no están en el dto
      forbidNonWhitelisted: true, // Alerta de los campos que no están en el dto
    }),
  );
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
