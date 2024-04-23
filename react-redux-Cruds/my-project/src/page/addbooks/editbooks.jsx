import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateBOOK } from '../../feturees/books/bookSlice';

const EditeBooks = () => {
  const navigate = useNavigate(); 
  const dispatch = useDispatch()
  const location = useLocation();
  const [id, setId] = useState(location.state.id);
  const [title, setTitle] = useState(location.state.title);
  const [name, setName] = useState(location.state.name);

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(updateBOOK({ id, title, name }));
    alert('Data is Updated')
    navigate('/showbooks');
  }

  return (
    <div className='bg-red-400 py-40'>
      <h1 className="text-2xl font-bold text-center text-white">Edit Books</h1>
      <div className="max-w-lg mx-auto mt-10">
        <form className="card-body" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="id" className="block text-sm font-medium text-gray-700">
              ID
            </label>
            <input
              type="text"
              value={id}
              className="p-3 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              onChange={(e => setId(e.target.value))}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              value={title}
              className="p-3 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              onChange={(e => setTitle(e.target.value))}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Author Name
            </label>
            <input
              type="text"
              value={name}
              className="p-3 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              onChange={(e => setName(e.target.value))}
            />
          </div>
          <div className="form-control mt-6">
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditeBooks;
