import { useState } from 'react';
import styles from './TodoForm.module.css';

function TodoForm({ setTodo, todos }) {
  const [text, setText] = useState('');

  const onSubmitTodo = (event) => {
    event.preventDefault();
    setTodo([...todos, text]);
    setText('');
  };

  return (
    <div>
      <form onSubmit={onSubmitTodo} className={styles.TodoForm}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter new todo"
        ></input>
        <button type="submit" className={styles.Button}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
