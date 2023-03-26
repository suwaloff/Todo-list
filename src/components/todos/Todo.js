import styles from './Todo.module.css';

function Todo({ todo, index, deleteTodo }) {
  return (
    <div onDoubleClick={() => deleteTodo(index)} className={styles.Todo}>
      {todo}
    </div>
  );
}

export default Todo;
