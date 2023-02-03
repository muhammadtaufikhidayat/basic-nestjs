import { Connection } from 'mongoose';
import { TodoSchema } from 'src/schemas/todos.schema';

export const todosProviders = [
  {
    provide: 'TODO_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('todos', TodoSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
