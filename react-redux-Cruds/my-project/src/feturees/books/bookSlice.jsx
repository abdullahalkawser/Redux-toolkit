import { createSlice } from '@reduxjs/toolkit';

const initialStateBooks = [
    { id: 1, title: 'Paradocilal', name: 'Abdullah' },
    { id: 2, title: 'Another Book', name: 'John Doe' },
    // Add more books
    { id: 3, title: 'Book Three', name: 'Jane Doe' },
    { id: 4, title: 'Book Four', name: 'Alice' },
    { id: 5, title: 'Book Five', name: 'Bob' },
    { id: 6, title: 'Book Six', name: 'Charlie' },
    { id: 7, title: 'Book Seven', name: 'David' },
    { id: 8, title: 'Book Eight', name: 'Eve' },
    { id: 9, title: 'Book Nine', name: 'Frank' },
    { id: 10, title: 'Book Ten', name: 'Grace' }
];

const bookSlice = createSlice({
    name: 'books',
    initialState: initialStateBooks,
    reducers: {
        showbooks: (state) => state,
        addBook: (state, action) => {
            const { id, title, name } = action.payload; // Assuming action.payload contains the new book information
            state.push({ id, title, name });
        },

        updateBOOK: (state, action) => {
            const { id, title, name } = action.payload; // Assuming action.payload contains updated book information
            const index = state.findIndex(book => book.id === id);
            if (index !== -1) {
                state[index] = { ...state[index], title, name };
            }
        },

        removeBookById: (state, action) => {
         
            return state.filter(book => book.id !== action.payload); // Assuming action.payload contains the ID of the book to be removed
        },
    },
});

export const { showbooks, removeBookById,updateBOOK,addBook } = bookSlice.actions;

export default bookSlice.reducer;
