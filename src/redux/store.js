import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { authReducer } from './auth/slice';

import filtersReducer from './filtersSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
    auth: authReducer,
  },
});
