import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  // app.enableCors({
  //   origin: 'http://localhost:5173',  // Permite solo desde el frontend
  //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  //   credentials: true  // Si necesitas enviar cookies o headers de autenticación
  // });

  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
