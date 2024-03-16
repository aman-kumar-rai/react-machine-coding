import styles from "./style.module.css";
import FlightBooker from "../examples/FlightBooker/FlightBooker";

const App = () => {
    return (
        <div className={styles.container}>
            <FlightBooker />
        </div>
    );
}

export default App;