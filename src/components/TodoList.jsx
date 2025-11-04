import TodoCard from "./TodoCard"
import React from "react";

export default  function TodoList ({todos, handleDeleteTodos, handleEditTodos})  {

    return(
        <ul className="main">
            {todos.map((todo, todoIndex )=>{

                return (
                 <TodoCard key={todoIndex} todo = {todo} handleDeleteTodos= {handleDeleteTodos} index={todoIndex} handleEditTodos= {handleEditTodos}>

                 </TodoCard>
                )
            })}

        </ul>
    )
}