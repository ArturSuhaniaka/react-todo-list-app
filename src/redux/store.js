import { configureStore } from '@reduxjs/toolkit';

import todosReducer from './todosSlice';
import filtersReducer from './filtersSlice';

export default configureStore({
  reducer: {
    todos: todosReducer,
    filters: filtersReducer,
  },
});
