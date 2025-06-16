import { createSlicem, nanoid } from '@reduxjs/toolkit';

const contactsSlice = createSclice({
    name: 'contacts',
    initialState: [],
    reducer: {
        addContact: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(name, number) {
                return {
                    payload: {
                        id: nanoid(),
                        name,
                        number,
                    },
                };
            },
        },
        deleteContact(state, action) {
            return state.filter(contact => contact.id !== action.payload);
        },
    },
});

export const {addContact, deleteContact} = contactsSlice.