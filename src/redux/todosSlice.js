/* eslint-disable no-use-before-define */
import { createSlice } from '@reduxjs/toolkit';
import { getData } from '../helpers/localStorage.helper';

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
    removeCompletedTodos: state => removeCompletedFromState(state),
    reorderTodos: (state, action) => reorderState(state, action),
  },
});

function addToState(state, action) {
  state.list.push(action.payload);
}

function updateState(state, action) {
  const updatedTodo = state.list.find(todo => todo.id === action.payload);
  if (updatedTodo) {
    updatedTodo.isCompleted = !updatedTodo.isCompleted;
  }
}

function removeFromState(state, action) {
  return {
    ...state,
    list: state.list.filter(todo => todo.id !== action.payload),
  };
}

function removeCompletedFromState(state) {
  return {
    ...state,
    list: state.list.filter(todo => !todo.isCompleted),
  };
}

function reorderState(state, action) {
  return {
    ...state,
    list: action.payload,
  };
}

export const {
  addTodo,
  completeTodo,
  removeTodo,
  removeCompletedTodos,
  reorderTodos,
} = todosSlice.actions;

export default todosSlice.reducer;
