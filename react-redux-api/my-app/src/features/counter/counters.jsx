// CounterComponent.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from './counterSlice';


const Counterb = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.value);

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset(0))}>Reset</button>
    </div>
  );
};

export default Counterb;
