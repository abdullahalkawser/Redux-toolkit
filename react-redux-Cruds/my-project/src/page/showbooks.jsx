import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBookById, showbooks } from '../feturees/books/bookSlice';
import { Link } from 'react-router-dom';


const Showbooks = () => {
  const books = useSelector(state => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showbooks());
  }, [dispatch]);

  // delete
  const handle = (ids)=>{
    dispatch(removeBookById(ids))
  }

  return (
    <div className=' px-44'>
      <h1 className='text-5xl font-bold text-center mt-5'> Books</h1>
      <div className="overflow-x-auto">
      <table className="table mt-15">
        <thead>
          <tr className='text-lg'>
            <th>ID</th>
            <th>BOOK-NAME</th>
            <th>AUTHOR-NAME</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {books && books.map(book => (
            <tr key={book.id} className='text-base'> {/* Add key attribute with unique value */}
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.name}</td>

              <td>
           
          
                <Link to= '/editBokks' state={{id: book.id, title: book.title, name: book.name }}>

                <button className="btn btn-active btn-ghost mr-5">Edit</button>
                
                </Link>
           
                <button onClick={()=> handle(book.id)} className="btn btn-active btn-secondary">Delete</button>

          
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Showbooks;
