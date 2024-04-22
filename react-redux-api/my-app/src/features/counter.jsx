import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './counter/counterSlice';


const Counterssss = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector(state => state.counter);

  useEffect(() => {
    // Dispatch the fetchData action when the component mounts
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <div>
          <h2>Data:</h2>
          <p>{JSON.stringify(data)}</p>
        </div>
      )}
    </div>
  );
};

export default Counterssss;
