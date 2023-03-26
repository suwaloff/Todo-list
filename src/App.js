import { useState } from 'react';
import './App.css';
import TodoForm from './components/todos/TodoForm';
import TodoList from './components/todos/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  function deleteTodoHandler(index) {
    setTodos(todos.filter((todo, idx) => idx !== index));
  }

  return (
    <div className="App">
      <h1>Todo list</h1>
      <TodoForm setTodo={setTodos} todos={todos} />
      <TodoList todos={todos} deleteTodo={deleteTodoHandler} />
    </div>
  );
}

export default App;
