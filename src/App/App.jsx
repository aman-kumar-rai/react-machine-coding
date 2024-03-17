import styles from "./style.module.css";
import TicTacToe from "../examples/TicTacToe/TicTacToe";

const App = () => {

    return (
        <div className={styles.container}>
            <TicTacToe
                rows={3}
                cols={3}
            />
        </div>
    );
}

export default App;