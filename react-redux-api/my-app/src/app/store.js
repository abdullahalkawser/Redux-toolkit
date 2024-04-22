import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../features/counter/counterSlice";


const store = configureStore({
  reducer: {
    counter: counterSlice.reducer, // Using the reducer directly
  },
});

export default store;
