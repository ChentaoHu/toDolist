import React , {useState} from 'react';
import "./App.css";
import Form from "./Component/Form";
import TodoList from "./Component/TodoList";

function App() {
  const [todos, setTodos] =useState([]);

  const toggleTodo =(id) => {
    const newTodos =[...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  const deleteSingleTodo = (todos) =>{
    setTodos(todos.filter((e) => e.id !== todos.id))
  }

  return (
  <div className = "App">
    <header>
      <h1>Kevin's Todo list</h1>
    </header>
    <Form setTodos={setTodos} todos={todos}/>
    <TodoList todos={todos} toggleTodo={toggleTodo} deleteSingleTodo ={deleteSingleTodo}/>
  </div>
  );
}

export default App;
