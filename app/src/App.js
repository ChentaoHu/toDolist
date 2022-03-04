import React , {useState} from 'react';
import "./App.css";
import Form from "./Component/Form";
import TodoList from "./Component/TodoList";

function App() {
  const [todos, setTodos] =useState([]);
  return (
  <div className = "App">
    <header>
      <h1>Kevin's Todo list</h1>
    </header>
    <Form setTodos={setTodos}/>
    <TodoList todos={todos} />
  </div>
  );
}

export default App;
