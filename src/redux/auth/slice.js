import { createSlice } from '@reduxjs/toolkit';
import { logOut, login, refreshUser, register } from './operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(login.pending, state => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(refreshUser.pending, state => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(refreshUser.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(logOut.pending, state => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(logOut.fulfilled, state => {
        state.isLoading = false;
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const authReducer = authSlice.reducer;
