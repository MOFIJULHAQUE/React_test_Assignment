import React,{useState} from 'react';
import TodoList from "./TodoList"

const Todo = () => {
    const [data,setData]=useState([]);

    const dataInput =(inputData)=>{

        setData([...data,inputData]);


    }

    return (
        <>
            <h2>T-O-D-O</h2>
            <TodoList dataInput={dataInput}/>
            {
                data.map((textData)=>{
                    return(
                        <>

                            <h1>yjhdsgfsdjf</h1>
                        </>
                    )
                })
            }

        </>
    )
}
export default Todo;