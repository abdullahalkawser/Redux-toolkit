import { configureStore } from '@reduxjs/toolkit';
import bookSlice from './feturees/books/bookSlice';
// Corrected path to bookSlice

const store = configureStore({
  reducer: {
    // Use the name exported by bookSlice as the key
    books: bookSlice // Assuming bookSlice is exporting a slice named "books"
  }
});

export default store;

