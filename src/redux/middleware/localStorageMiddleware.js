import {
  addTodo,
  completeTodo,
  removeTodo,
  removeCompletedTodos,
  reorderTodos,
} from '../todosSlice';

import { insertData } from '../../helpers/localStorage.helper';

export const localStorageMiddleware = store => next => action => {
  const result = next(action);

  switch (action.type) {
    case addTodo.type:
    case completeTodo.type:
    case removeTodo.type:
    case removeCompletedTodos.type:
    case reorderTodos.type: {
      const { list } = store.getState().todos;
      insertData(list);
      break;
    }
    default:
      break;
  }

  return result;
};
