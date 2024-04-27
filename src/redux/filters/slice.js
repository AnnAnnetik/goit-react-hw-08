import { createSlice } from '@reduxjs/toolkit';
// const INITIAL_STATE = {
//   filters: {
//     name: '',
//   },
// };
const filtersSlice = createSlice({
  name: 'filters',
  initialState: { name: '' },
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
