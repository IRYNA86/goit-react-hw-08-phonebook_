import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    getFilterContact(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { getFilterContact } = contactsSlice.actions;

export default contactsSlice.reducer;
