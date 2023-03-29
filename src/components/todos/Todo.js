import { RiTodoFill, RiDeleteBin5Line } from 'react-icons/ri';
import { FaCheckSquare } from 'react-icons/fa';
import styles from './Todo.module.css';

function Todo({ todo, deleteTodo }) {
  return (
    <div className={styles.todo}>
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo.text}</div>
      <RiDeleteBin5Line
        className={styles.deleteIcon}
        onClick={() => deleteTodo(todo.id)}
      />
      <FaCheckSquare className={styles.checkIcon} />
    </div>
  );
}

export default Todo;
