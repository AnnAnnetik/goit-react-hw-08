import { createSlice } from '@reduxjs/toolkit';
const INITIAL_STATE = {
  filters: {
    name: '',
  },
};
const filtersSlice = createSlice({
  name: 'filter',
  initialState: INITIAL_STATE.filters,
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export const selectNameFilter = state => state.filters.name;
export default filtersSlice.reducer;
