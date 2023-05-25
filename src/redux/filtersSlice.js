import { createSlice } from '@reduxjs/toolkit';
import { StatusFilters } from '../helpers/filter.helper';

const initialState = {
  status: StatusFilters.All,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    statusFilterChanged: (state, action) => {
      return {
        ...state,
        status: action.payload,
      };
    },
  },
});

export const { statusFilterChanged } = filtersSlice.actions;

export default filtersSlice.reducer;
