import React from 'react'
import { useState } from 'react'

const Todolist = () => {
    const [text, setText] = useState("")
    const [todos, setTodos] = useState([])

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleAdd = (e) => {
        setTodos([...todos, { text }]);
        console.log(todos);
    }

  return (
    <div>
        <h1>Todo List</h1>
        <ul>
            {todos.map((data, index)=> (
                <li key={index}>
                    {data.text}
                </li>
            ))}
        </ul>
        <input onChange={handleChange} /> 
        <button onClick={handleAdd}>Add Todo</button>
    </div>
  )
}

export default Todolist