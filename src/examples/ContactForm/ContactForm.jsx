import { SUBMIT_URL } from "./constants.js";
import { submitForm } from "./utils.js";
import styles from "./style.module.css";

const ContactForm = () => {

    return (
        <form
            className={styles.form}
            method="post"
            action={SUBMIT_URL}
            onSubmit={submitForm}
        >
            <label className={styles.label}>
                <span>Name</span>
                <input type="text" name={"name"} />
            </label>
            <label className={styles.label}>
                <span>Email</span>
                <input type="email" name={"email"} />
            </label>
            <label className={styles.label}>
                <span>Message</span>
                <textarea name={"message"}></textarea>
            </label>
            <button type="submit" className={styles.btn}>
                Send
            </button>
        </form>
    )
}

export default ContactForm;