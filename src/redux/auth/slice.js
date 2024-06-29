import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, refreshUser } from './operations';
import toast from 'react-hot-toast';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  loading: false,
  error: null,
};

const handleFulfilled = state => {
  state.loading = false;
  state.error = null;
};

const handlePending = state => {
  state.error = null;
  state.loading = true;
};

const handleRejected = (state, action, message) => {
  state.loading = false;
  state.error = action.payload;
  toast.error(message);
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, (state, action) => {
        handleFulfilled(state);
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, action) => {
        handleRejected(
          state,
          action,
          'Sorry!😭 The server is busy, please try again later!'
        );
      })
      .addCase(login.pending, handlePending)
      .addCase(login.fulfilled, (state, action) => {
        handleFulfilled(state);
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, (state, action) => {
        handleRejected(state, action, 'Incorrect user data!');
      })
      .addCase(logout.pending, handlePending)
      .addCase(logout.fulfilled, state => {
        handleFulfilled(state);
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logout.rejected, (state, action) => {
        handleRejected(state, action, 'Logout failed. Please try again!');
      })
      .addCase(refreshUser.pending, state => {
        handlePending(state);
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        handleFulfilled(state);
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
