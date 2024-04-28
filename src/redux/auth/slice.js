import { createSlice, isAnyOf } from '@reduxjs/toolkit';
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

      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })

      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })

      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })

      .addCase(logOut.fulfilled, state => {
        state.isLoading = false;
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })

      .addMatcher(
        isAnyOf(
          register.pending,
          login.pending,
          refreshUser.pending,
          logOut.pending
        ),
        state => {
          state.isLoading = true;
          state.isError = false;
        }
      )
      .addMatcher(
        isAnyOf(
          register.rejected,
          login.rejected,
          refreshUser.rejected,
          logOut.rejected
        ),
        state => {
          state.isLoading = false;
          state.isError = true;
        }
      );
  },
});

export const authReducer = authSlice.reducer;
