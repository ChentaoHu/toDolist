import React from 'react';
import Todo from './Todo'

function TodoList ({todos}){
  return (
        todos.map(todos => {
          return <Todo key ={todos.id} todos={todos} />
        })
  )
}

export default TodoList