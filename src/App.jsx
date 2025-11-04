import React from 'react'
import TodoInput from './components/Todoinput'
import TodoList from './components/TodoList'
import { useState, useEffect } from 'react'

export default function App() {
const [todos, setTodos] = useState([])
const [todoValue, setTodoValue] = useState('')

function persistData (NewList) {
localStorage.setItem('todos', JSON.stringify({todos:NewList }))
   
}

function handleAddTodos (newTodo) {
  const newTodoList = [...todos, newTodo]
  persistData (newTodoList);
  setTodos(newTodoList);

}
function handleDeleteTodos (index) {
  const newTodoList = todos.filter((todo, todoIndex)=>{
    return todoIndex !== index  
  })
  persistData (newTodoList);
  setTodos(newTodoList)
}
function handleEditTodos (index) {
   const valueToBeEdited =  todos [index]
   setTodoValue(valueToBeEdited)
   handleDeleteTodos(index)

}

useEffect(
  ()=>{
if (!localStorage){
  return
}
let localTodos = localStorage.getItem('todos')
if (!localTodos){
  return
}
localTodos = JSON.parse(localTodos).todos
setTodos(localTodos)
}

,[] )
  return (
    <>
      <TodoInput  handleAddTodos= {handleAddTodos} todoValue={todoValue} setTodoValue={setTodoValue} />
      <TodoList todos = {todos}  handleDeleteTodos={handleDeleteTodos} handleEditTodos={handleEditTodos}/>
    </>
  )
}
