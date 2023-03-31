import { RiDeleteBin5Line } from 'react-icons/ri';
import { FaCheckSquare } from 'react-icons/fa';
import styles from './Todo.module.css';

function Todo({ todo, deleteTodo, relayTodo }) {
  return (
    <div
      className={`${styles.todo} ${
        todo.isComplited ? styles.completedTodo : ''
      }`}
    >
      <FaCheckSquare
        className={styles.checkIcon}
        onClick={() => relayTodo(todo.id)}
      />
      <div className={styles.todoText}>{todo.text}</div>
      <RiDeleteBin5Line
        className={styles.deleteIcon}
        onClick={() => deleteTodo(todo.id)}
      />
    </div>
  );
}

export default Todo;
