import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contactsSlice';
import contactsSlice from "./contactsSlice";

export default configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    contacts: contactsSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});

