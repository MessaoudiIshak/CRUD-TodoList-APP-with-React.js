import React from 'react'

export default function TodoInput({handleAddTodos, todoValue, setTodoValue}) {
 
  return (
    <header>
        <input  placeholder="Enter todo..." type="text" onChange={(e)=>{setTodoValue(e.target.value)}} value={todoValue}/>
        <button onClick={()=>{
            handleAddTodos(todoValue);
            setTodoValue('')
        }}>Add</button>
    </header>
  )
}
