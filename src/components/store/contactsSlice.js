import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  filter: '',
};

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  tagTypes: ['Contacts'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62dd121179b9f8c30aa17c4b.mockapi.io/api/v1',
  }),
  endpoints: build => ({
    getContacts: build.query({
      query: () => 'contacts',
      providesTags: result =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Contacts', id })),
              { type: 'Contacts', id: 'LIST' },
            ]
          : [{ type: 'Contacts', id: 'LIST' }],
    }),

    addContact: build.mutation({
      query: body => ({
        url: 'contacts',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Contacts', id: 'LIST' }],
    }),
    deleteContact: build.mutation({
      query: id => ({
        url: `contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Contacts', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi;

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
