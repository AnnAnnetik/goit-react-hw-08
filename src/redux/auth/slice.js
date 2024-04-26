import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};
const authSlice = createSlice({
  name: 'filter',
  initialState: INITIAL_STATE.filters,
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export default authSlice.reducer;
