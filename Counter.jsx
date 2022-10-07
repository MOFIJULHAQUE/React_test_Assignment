import React, { useState } from 'react';
import "./Counter.css";

const Counter = () => {

    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1)
        
        if(counter == 10){

            setCounter(10);

        }
    }

    const decrement = () => {
        setCounter(counter - 1)
        
        if (counter == -10) {

            setCounter(-10);

        }
    }

    const reset = () => {
        setCounter(0)
    }
    return (

        <>
            <h1>Counter</h1>
            <div className={ counter > 0 ?  "green" : counter < 0 ? "red" :  "blue"}>
                <h1>{counter}</h1>

            </div>
            <button onClick={() => { decrement() }}>Decrement</button>
            <button onClick={() => { increment() }}>Increment</button>
            <button onClick={() => { reset() }}>Reset</button>



            <h1>--------------------------------</h1>
        </>

    )
}
export default Counter;