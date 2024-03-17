import styles from "./style.module.css";
import MortgageCalculator from "../examples/MortgageCalculator/MortgageCalculator";

const App = () => {
    return (
        <div className={styles.container}>
            <MortgageCalculator />
        </div>
    );
}

export default App;