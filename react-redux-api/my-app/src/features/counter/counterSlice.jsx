// counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    reset: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;

export default counterSlice.reducer;


// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// // Define a thunk to fetch data from an API
// export const fetchData = createAsyncThunk('counter/fetchData', async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await response.json();
//   return data;
// });

// // Create a slice for managing the counter state
// export const counterSlice = createSlice({
//   name: 'counter',
//   initialState: {
//     value: 0,
//     loading: false,
//     error: null,
//     data: null,
//   },
//   reducers: {
//     increment: state => {
//       state.value += 1;
//     },
//     decrement: state => {
//       state.value -= 1;
//     },
//     reset: (state, action) => {
//       state.value = action.payload;
//     },
//   },
//   extraReducers: builder => {
//     builder
//       .addCase(fetchData.pending, state => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchData.fulfilled, (state, action) => {
//         state.loading = false;
//         state.data = action.payload;
//       })
//       .addCase(fetchData.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//   },
// });

// export const { increment, decrement, reset } = counterSlice.actions;

// export default counterSlice.reducer;
