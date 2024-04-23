// Addbooks.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../feturees/books/bookSlice';

const Addbooks = () => {
  const dispatch = useDispatch();
  const [book, setBook] = useState({ id: '', title: '', name: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addBook(book));
    setBook({ id: '', title: '', name: '' }); 
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBook({ ...book, [name]: value });
  };

  return (
    <div className='bg-red-400 py-40'>
    <h1 className="text-2xl font-bold text-center text-white">Add Book</h1>
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-10 ">
      <div className="mb-4">
        <label htmlFor="id" className="block text-sm font-medium text-gray-700">
          ID
        </label>
        <input
          type="text"
          id="id"
          name="id"
          value={book.id}
          onChange={handleChange}
          className=" p-3 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          placeholder="Enter ID"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={book.title}
          onChange={handleChange}
          className=" p-3 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          placeholder="Enter Title"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="author" className="block text-sm font-medium text-gray-700">
          Author
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={book.name}
          onChange={handleChange}
          className=" p-3 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          placeholder="Enter Author"
        />
      </div>
      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Add Book
      </button>
    </form>
  </div>
  );
};

export default Addbooks;
