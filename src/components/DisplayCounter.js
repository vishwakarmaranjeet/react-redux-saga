import React from 'react';
import Counter from '../HOC/Counter';

const DisplayCounter = (props) => {
    const { show, onIncrement, onDecrement } = props;
    return (
        <>
            <button type='button' onClick={onIncrement}>Increment</button>{` ${show} `}<button type='button' onClick={onDecrement}>Decrement</button>
        </>
    );
}

export default Counter(DisplayCounter);