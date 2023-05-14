import { createSlice } from '@reduxjs/toolkit';
import {
  getData,
  insertData,
  deleteData,
} from '../helpers/localStorage.helper';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [...getData()],
  reducers: {
    addTodo: (state, action) => addToState(state, action),
    completeTodo: (state, action) => updateState(state, action),
    removeTodo: (state, action) => removeFromState(state, action),
  },
});

function addToState(state, action) {
  state.push(action.payload);
  insertData(action.payload);
}

function updateState(state, action) {
  const todo = state.find((todo) => todo.id === action.payload);
  if (todo) {
    todo.isCompleted = !todo.isCompleted;
    insertData(todo);
  }
}

function removeFromState(state, action) {
  deleteData(action.payload);
  return state.filter((todo) => todo.id !== action.payload);
}

export const { addTodo, completeTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
