import styles from "./style.module.css";
import ContactForm from "../examples/ContactForm/ContactForm";

const App = () => {
    return (
        <div className={styles.container}>
            <ContactForm />
        </div>
    );
}

export default App;