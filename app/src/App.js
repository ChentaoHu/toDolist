import React , {useState} from 'react';
import "./App.css";
import Form from "./Component/Form";
import TodoList from "./Component/TodoList";

function App() {
  const [todos, setTodos] =useState([]);
  const [status, setStatus] =useState('All')

  const toggleTodo =(id) => {
    const newTodos =[...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  const deleteSingleTodo = () =>{
    setTodos(todos.filter((e) => e.id !== todos.id))
  }

  return (
  <div className = "App">
    <header>
      <h1>Kevin's ToDo list</h1>
    </header>
    <div className="Info">
      <Form className ="Form" setTodos={setTodos} todos={todos}/>
      <TodoList className ="todolist" todos={todos} toggleTodo={toggleTodo} deleteSingleTodo ={deleteSingleTodo}/>
    </div>
  </div>
  );
}

export default App;
