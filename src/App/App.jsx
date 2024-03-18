import styles from "./style.module.css";
import UndoableCounter from "../examples/UndoableCounter/UndoableCounter";

const App = () => {

    return (
        <div className={styles.container}>
            <UndoableCounter />
        </div>
    );
}

export default App;