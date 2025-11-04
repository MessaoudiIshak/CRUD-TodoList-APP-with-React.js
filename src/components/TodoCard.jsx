import React from 'react'

export default function TodoCard({todo, handleDeleteTodos, index, handleEditTodos}) {
  return (
    
                    <li className="todoItem" >
                        <p>{todo}</p>
                            <div className='actionContainer'>
                                <button onClick={()=>{handleEditTodos(index)}}><i className="fa-solid fa-pen-to-square"></i> </button>
                                <button onClick={()=>{handleDeleteTodos(index)}}><i className="fa-solid fa-trash"></i></button>
                                
                            </div> 
                    </li>
  )
}
