import { useState } from 'react';
import styles from './TodoList.module.css';
import Todo from './Todo';

function TodoList({ todos, deleteTodo, relayTodo }) {
  return (
    <div>
      {todos.length < 1 ? (
        <h2>Todo list is empty</h2>
      ) : (
        todos.map((todo) => (
          <Todo
            todo={todo}
            key={todo.id}
            deleteTodo={deleteTodo}
            relayTodo={relayTodo}
          />
        ))
      )}
    </div>
  );
}

export default TodoList;
