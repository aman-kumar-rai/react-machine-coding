import styles from "./style.module.css";
import TemperatureConverter from "../examples/TemperatureConverter/TemperatureConverter";

const App = () => {
    return (
        <div className={styles.container}>
            <TemperatureConverter />
        </div>
    );
}

export default App;