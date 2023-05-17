import { createSelector } from '@reduxjs/toolkit';

export const StatusFilters = {
  All: 'All',
  Active: 'Active',
  Completed: 'Completed',
};

export const getFilteredTodos = createSelector(
  (state) => state.todos.list,
  (state) => state.filters,
  (todos, filters) => {
    const { status } = filters;

    if (status === StatusFilters.All) {
      return todos;
    }

    const completedStatus = status === StatusFilters.Completed;

    return todos.filter((todo) => todo.isCompleted === completedStatus);
  }
);

export const getAllTodosCount = (state) => state.todos.list.length;
