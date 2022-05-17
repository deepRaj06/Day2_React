import React, {useState} from 'react';


const Counter = () => {

// Step-2 count is taking initial value as 0
// For storing the state of count you need setCount

    const [count, setCount] = useState(0);

// Step-3
    const incrementCount = () => {
        // console.log('pre',count);
        setCount(count+1);
        // console.log('post', count);
    }
    const decrementCount = () => {
        // console.log('pre',count);
        if(count>0)
        setCount(count-1);
        // console.log('post', count);
    }
// Step-1 Create html like structure of whatever you want
    return (
        <div>
            <h1>Counter App: {count}</h1>
            <button onClick={incrementCount}>Increment</button>
            <button onClick={decrementCount}>Decrement</button>
        </div>
    )
};

export default Counter;


