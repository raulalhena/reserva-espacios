import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // configuramos la raíz de nuestra api en http://localhost:3000/api/v1/
  app.setGlobalPrefix("api/v1");
  // habilitamos cors a nivel global de nuestra api
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
