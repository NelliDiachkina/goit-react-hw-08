import { createSlice } from '@reduxjs/toolkit';
import { logout } from '../auth/operations';
import {
  fetchContacts,
  deleteContact,
  addContact,
  updateContact,
} from '../../redux/contacts/operations';
import toast from 'react-hot-toast';

const handlePending = state => {
  state.error = null;
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
  toast.error('🤒 Something went wrong!');
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(item => item.id !== action.payload.id);
        toast.success('DELETED! 🗑️');
      })
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
        toast.success('Added contact! 😊');
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(updateContact.pending, handlePending)
      .addCase(updateContact.fulfilled, (state, action) => {
        state.loading = false;
        const indexContact = state.items.findIndex(
          item => item.id === action.payload.id
        );
        state.items[indexContact] = action.payload;
        toast.success('Contact changed! 😊');
      })
      .addCase(updateContact.rejected, handleRejected)
      .addCase(logout.fulfilled, state => {
        state.items = [];
        state.error = null;
        state.loading = false;
      }),
});

export const contactsReducer = contactsSlice.reducer;
