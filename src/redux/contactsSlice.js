import { createSlice, nanoid } from '@reduxjs/toolkit';
import { initialContacts } from '../data/initialContacts';

const slice = createSlice({
  name: 'contacts',
  initialState: { items: initialContacts },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(newContact) {
        return {
          payload: {
            id: nanoid(),
            ...newContact,
          },
        };
      },
    },

    deleteContact: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = slice.actions;

export const selectContacts = state => state.contacts.items;

export default slice.reducer;
