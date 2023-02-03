import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateTodoDto } from 'src/dto/create-todo.dto';
import { Todo } from 'src/interfaces/todos.interface';

@Injectable()
export class TodosService {
  constructor(
    @Inject('TODO_MODEL')
    private todoModel: Model<Todo>,
  ) {}

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    const createdTodo = new this.todoModel(createTodoDto);
    return createdTodo.save();
  }

  async findAll(): Promise<Todo[]> {
    return await this.todoModel.find().exec();
  }

  async delete(id: string) {
    return await this.todoModel.findOneAndDelete({ _id: id }).exec();
  }
}
