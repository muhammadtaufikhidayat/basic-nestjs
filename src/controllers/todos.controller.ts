import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { CreateTodoDto } from 'src/dto/create-todo.dto';
import { TodosService } from 'src/services/todos.service';
import { Todo } from 'src/interfaces/todos.interface';

@Controller('api/todos')
export class TodosController {
  constructor(private readonly todoService: TodosService) {}

  @Post()
  @HttpCode(201)
  async create(@Body() createCatDto: CreateTodoDto) {
    return this.todoService.create(createCatDto);
  }

  @Get()
  @HttpCode(200)
  async findAll(@Res() res: Response): Promise<object> {
    const todos: Todo[] = await this.todoService.findAll();
    return res.json({ status: 'OK', data: todos });
  }

  @Delete(':id')
  @HttpCode(200)
  async delete(@Param() params, @Res() res: Response) {
    await this.todoService.delete(params.id);
    return res.json({ message: 'Data succesfully deleted!' });
  }
}
