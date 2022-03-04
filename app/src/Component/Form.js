import React , { useRef, useEffect}from 'react';
import {v4 as uuid} from "uuid"; 

const STORAGE_KEY = 'todoApp.todos'

const Form =({setTodos, todos}) => {
  const todoNameref =useRef();
  
  useEffect(() =>{
    const storedTodos =JSON.parse(localStorage.getItem(STORAGE_KEY))
    if(storedTodos) setTodos(storedTodos)
  }, [])


  useEffect(() =>{
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  },[todos])

  function handleAddtodo(e){
    const name = todoNameref.current.value;
    if (name === '') return
    setTodos(prev => {
      return [...prev, {id:uuid(), name:name, complete: false}]
    }) 
    todoNameref.current.value =null
  }

  function deleteTodo(e){
    const newTodo = todos.filter(todo => !todo.complete)
    setTodos(newTodo)
  }


  return(
  <form>
    <input ref= {todoNameref} type ="text" className="todo-list"/>
    <button onClick={handleAddtodo} className="todo-button" type="submit">
      Add Todos
    </button>
    <button className ="clear-button" onClick={deleteTodo}>
      Delete Selected Todos
    </button>
    <div className="select">
      <select name="todos" className="filter">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">uncompleted</option>
      </select>
    </div>
  </form>
  )
}

export default Form;