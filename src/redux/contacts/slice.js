import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import fetchContacts, { addContact, deleteContact } from './operations';

// export const INITIAL_STATE = {
//   contacts: {
//     items: [],
//     loading: false,
//     error: null,
//   },
// };

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    loading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.contacts = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.contacts = [...state.contacts, action.payload];
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload.id
        );
      })

      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending
        ),
        state => {
          state.loading = true;
          state.error = false;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected
        ),
        state => {
          state.loading = false;
          state.error = true;
        }
      ),
});

export const contactsReducer = contactsSlice.reducer;
