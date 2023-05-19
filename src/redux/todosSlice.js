import { createSlice } from '@reduxjs/toolkit';
import {
  getData,
  insertData,
  deleteData,
} from '../helpers/localStorage.helper';

const initialState = {
  list: [...getData()],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => addToState(state, action),
    completeTodo: (state, action) => updateState(state, action),
    removeTodo: (state, action) => removeFromState(state, action),
    removeCompletedTodos: (state, action) => removeCompletedFromState(state),
    reorderTodos: (state, action) => reorderState(state, action),
  },
});

function addToState(state, action) {
  state.list.push(action.payload);
  insertData(state.list);
}

function updateState(state, action) {
  const todo = state.list.find((todo) => todo.id === action.payload);
  if (todo) {
    todo.isCompleted = !todo.isCompleted;
    insertData(state.list);
  }
}

function removeFromState(state, action) {
  deleteData(action.payload);
  state.list = state.list.filter((todo) => todo.id !== action.payload);
}

function removeCompletedFromState(state) {
  state.list
    .filter((todo) => todo.isCompleted)
    .map((todo) => deleteData(todo.id));

  state.list = state.list.filter((todo) => !todo.isCompleted);
}

function reorderState(state, action) {
  state.list = action.payload;
  insertData(state.list);
}

export const {
  addTodo,
  completeTodo,
  removeTodo,
  removeCompletedTodos,
  reorderTodos,
} = todosSlice.actions;

export default todosSlice.reducer;
