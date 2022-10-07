import React, { useState } from 'react';

const TodoList = (props) => {


    const [textData, setTextData] = useState("");

    return (
        <>

            <input type="text" placeholder='name'
                onChange={(e) => {
                    console.log(e.target.value)
                    setTextData(e.target.value)
                }}></input>
            <input type="text" placeholder='Link'
                onChange={(e) => {
                    console.log(e.target.value)
                    setTextData(e.target.value)
                }}></input>
            <input type="text" placeholder='rating'
                onChange={(e) => {
                    console.log(e.target.value)
                    setTextData(e.target.value)
                }}></input>
            <button onClick={props.dataInput(textData)}>ADD</button>

        </>
    )
}
export default TodoList;