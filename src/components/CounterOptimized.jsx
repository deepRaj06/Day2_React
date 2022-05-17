import React, {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0); //0 is initial value

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={ () => {setCount(count+1)}}>Increment</button>
            <button onClick={ () => {setCount(count>0 ? count-1 : 0)}}>Decrement</button>
        </div>
    )
}

export default Counter;