import styles from "./style.module.css";
import SignupForm from "../examples/SignupForm/SignupForm";

const App = () => {

    return (
        <div className={styles.container}>
            <SignupForm />
        </div>
    );
}

export default App;