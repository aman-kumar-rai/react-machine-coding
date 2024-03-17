import styles from "./style.module.css";
import Stopwatch from "../examples/Stopwatch/Stopwatch";

const App = () => {

    return (
        <div className={styles.container}>
            <Stopwatch />
        </div>
    );
}

export default App;