import ProgressBars from "../examples/ProgressBars/ProgressBars";
import styles from "./style.module.css";


const App = () => {

    return (
        <div className={styles.container}>
            <ProgressBars
                concurrency={2}
            />
        </div>
    );
}

export default App;