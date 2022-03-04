import React from 'react';
import Todo from './Todo'


function TodoList ({todos,toggleTodo, deleteSingleTodo}){
  return (
        todos.map(todos => {
          return <Todo key ={todos.id} toggleTodo ={toggleTodo} todos={todos} deleteSingleTodo={deleteSingleTodo}/>
        })
  )
}

export default TodoList