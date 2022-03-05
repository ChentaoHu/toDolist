import React from 'react'

export default function Todo({todos, toggleTodo, deleteSingleTodo}) {

  function todoClick(){
    toggleTodo(todos.id)
  }
  return (
    <div className="todo" >
      <label className={todos.complete ?"completed" : ""}>
        <input type ="checkbox" checked={todos.complete} onChange={todoClick} />
      {todos.name}
        <button onClick ={deleteSingleTodo}>x</button>
      </label>
    </div>
  )
}
