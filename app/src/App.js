import React , {useState} from 'react';
import "./App.css";
import Form from "./Component/Form";
import TodoList from "./Component/TodoList";

function App() {
  const [todos, setTodos] =useState([]);
  const [status, setStatus] =useState('All')
  const [filter,setFilter] = useState([])

  const toggleTodo =(id) => {
    const newTodos =[...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  const deleteSingleTodo = (id) =>{
    setTodos(todos.filter((e) => e.id !== id))
  }

  function filterHandler(){
    switch(status){
      case 'completed':
        setFilter(todos.filter(todo => todo.complete ===true))
        break;
    }
  }

  return (
  <div className = "App">
    <header>
      <h1>Kevin's ToDo List</h1>
    </header>
    <div className="Info">
      <Form className ="Form" setTodos={setTodos} todos={todos} setFilter={setFilter}/>
      <TodoList className ="todolist" todos={todos} toggleTodo={toggleTodo} deleteSingleTodo ={deleteSingleTodo}/>
    </div>
  </div>
  );
}

export default App;
