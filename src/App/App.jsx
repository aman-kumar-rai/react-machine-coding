import styles from "./style.module.css";
import HolyGrail from "../examples/HolyGrail/HolyGrail";

const App = () => {
    return (
        <div className={styles.container}>
            <HolyGrail />
        </div>
    );
}

export default App;