import React, { useState } from 'react';

const Counter = WrapperComponent => {
    const Component = () => { 
        const [count, setCount] = useState(0);
        return <WrapperComponent onIncrement={() => setCount(count + 1)} onDecrement={()=>setCount(count - 1)} show={count}/>
    }
    return Component
}

export default Counter;