import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { TodosModule } from './module/todos.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(TodosModule);
  await app.listen(3000);
}
bootstrap();
