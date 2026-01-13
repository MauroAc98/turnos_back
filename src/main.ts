import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,      // Elimina datos que no estén en el DTO
    forbidNonWhitelisted: true, // Lanza error si envían datos extra
    transform: true,      // Convierte tipos (ej: string a number)
  }));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
