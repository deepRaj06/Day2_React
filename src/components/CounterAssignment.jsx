import React, {useState} from 'react';


const CountAssign = () => {

    const [count, setCount] = useState(0);
    const oddCountColor = {
        color: 'red'
    }
    const evenCountColor = {
        color: 'green'
    }

    return ( 
        <>
        <h1 style={count%2 ? oddCountColor : evenCountColor}>Counter: {count}</h1>
        <button onClick={ () => {setCount(count+1)}}>Increment</button>
        <button onClick={ () => {setCount(count ? count-1 : 0)}}>Decrement</button>
        {/* This condition is checking if count has some value then do operation else zero */}
        <button onClick={ () => {setCount(count ? count*2 : 0)}}>Double</button>

        </>     
    )
}

export default CountAssign;