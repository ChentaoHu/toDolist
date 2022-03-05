import React from 'react';
import Todo from './Todo'


function TodoList ({todos,toggleTodo, deleteSingleTodo}){
  return (
        todos.map(todo => {
          return <Todo todo ={todo} toggleTodo ={toggleTodo}  deleteSingleTodo={deleteSingleTodo}/>
        })
  )
}

export default TodoList