import styles from "./style.module.css";
import TodoList from "../examples/TodoList/TodoList";

const App = () => {

    return (
        <div className={styles.container}>
            <TodoList />
        </div>
    );
}

export default App;