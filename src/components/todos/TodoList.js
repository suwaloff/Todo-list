import { useState } from 'react';
import styles from './TodoList.module.css';
import Todo from './Todo';

function TodoList({ todos, deleteTodo }) {
  console.log(todos);
  return (
    <div>
      {todos.length < 1 ? (
        <h2>Todo list is empty</h2>
      ) : (
        todos.map((text, index) => (
          <Todo todo={text} key={index} index={index} deleteTodo={deleteTodo} />
        ))
      )}
    </div>
  );
}

export default TodoList;
