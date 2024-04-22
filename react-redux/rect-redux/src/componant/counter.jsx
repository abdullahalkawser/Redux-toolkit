import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, resetcounter } from '../service/action/counterAction';

export const Counter = () => {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment());
    };

    const handleDecrement = () => {
        dispatch(decrement());
    };

    const handleReset = () => {
        dispatch(resetcounter());
    };

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={handleIncrement}>Add +</button>
            <button onClick={handleDecrement}>Minus -</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};
