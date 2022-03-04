import React , {useState , useRef}from 'react';
import uuidv4 from 'uuid/v4';

const Form =({setTodos}) => {
  const todoNameref =useRef();

  function handleAddtodo(e){
    const name = todoNameref.current.value;
    if (name === '') return
    setTodos(prev => {
      return [...prev, {id:uuidv4(), name:name, complete: false}]
    })
    todoNameref.current.value =null
  }

  return(
  <form>
    <input ref= {todoNameref} type ="text" className="todo-list"/>
    <button onClick={handleAddtodo} className="todo-button" type="submit">
      Add Todos
    </button>
    <button className ="clear-button">
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