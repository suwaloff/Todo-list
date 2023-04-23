import { MdDeleteForever } from 'react-icons/md';
import { AiOutlineClear } from 'react-icons/ai';
import styles from './Todo.module.css';

function TodoButton({ todos, deleteAllTodos, deleteCompletedTodos }) {
  return (
    <div>
      {todos.length > 0 && (
        <div>
          <AiOutlineClear
            className={styles.checkIcon}
            title="Clear completed todos"
            onClick={() => deleteCompletedTodos()}
          />

          <MdDeleteForever
            className={styles.deleteIcon}
            title="Reset todos "
            onClick={() => deleteAllTodos()}
          />
        </div>
      )}
    </div>
  );
}

export default TodoButton;
