import { Module } from '@nestjs/common';
import { TodosController } from 'src/controllers/todos.controller';
import { todosProviders } from 'src/providers/todos.provider';
import { TodosService } from 'src/services/todos.service';
import { DatabasesModule } from './database.module';

@Module({
  imports: [DatabasesModule],
  controllers: [TodosController],
  providers: [TodosService, ...todosProviders],
})
export class TodosModule {}
