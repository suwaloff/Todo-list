import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import TodoForm from './components/todos/TodoForm';
import TodoList from './components/todos/TodoList';
import TodoButton from './components/todos/TodoButton';

function App() {
  const [todos, setTodos] = useState([]);

  function addTodoHandler(text) {
    const newTodo = {
      text: text,
      isComplited: false,
      id: uuidv4(),
    };

    setTodos([...todos, newTodo]);
  }

  function relayTodoHandler(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isComplited: !todo.isComplited }
          : { ...todo }
      )
    );
  }

  function deleteTodoHandler(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function deleteAllTodosHandler() {
    setTodos([]);
  }

  function deleteCompletedTodosHandler() {
    setTodos(todos.filter((todo) => todo.isComplited === false));
  }

  return (
    <div className="App">
      <h1 className="Headline">Just do it</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoButton
        todos={todos}
        deleteAllTodos={deleteAllTodosHandler}
        deleteCompletedTodos={deleteCompletedTodosHandler}
      />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        relayTodo={relayTodoHandler}
      />
    </div>
  );
}

export default App;
