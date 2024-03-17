import styles from "./style.module.css";
import GenerateTable from "../examples/GenerateTable/GenerateTable";

const App = () => {
    return (
        <div className={styles.container}>
            <GenerateTable />
        </div>
    );
}

export default App;