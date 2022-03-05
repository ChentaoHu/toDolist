import React , { useRef, useEffect}from 'react';
import {v4 as uuid} from "uuid"; 

const STORAGE_KEY = 'todoApp.todos'

const Form =({setTodos, todos, setStatus}) => {
  const userInput =useRef();
  
  useEffect(() =>{
    const storedTodos =JSON.parse(localStorage.getItem(STORAGE_KEY))
    if(storedTodos) setTodos(storedTodos)
  }, [])


  useEffect(() =>{
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  },[todos])

  function handleAddtodo(e){
    const toDoText = userInput.current.value;
    if (toDoText === '') return
    setTodos(prev => {
      return [...prev, {id:uuid(), name:toDoText, complete: false}]
    })
    userInput.current.value =null
  }

  function deleteTodo(e){
    const newTodo = todos.filter(todo => !todo.complete)
    setTodos(newTodo)
  }

  function statusChange(e){
    setStatus(e.target.value)
  }

  

  return(
  <form>
    <input ref= {userInput} type ="text" className="todo-list"/>
    <button onClick={handleAddtodo} className="todo-button" type="submit">
      Add Todos
    </button>
    <button className ="clear-button" onClick={deleteTodo}>
      Delete Selected Todos
    </button>
    <div>
      <select onChange={statusChange} name="todos" 
      className="filter">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </div>
    <h3>There are still {todos.filter(todo => !todo.complete).length } things left to do!</h3>
  </form>
  )
}

export default Form;