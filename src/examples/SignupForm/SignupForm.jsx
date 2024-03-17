import { useState } from "react";
import styles from "./style.module.css";

const SignupForm = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    const handleSubmitForm = (event) => {
        event.preventDefault();

        const { username, email, password, confirmPassword } = formData;

        if (username.length < 4) {
            console.log("Username should have atleast 4 characters");
            return;
        }
        else if (password.length < 6) {
            console.log("Password should have atleast 6 characters");
            return;
        }
        else if (password.length > 20) {
            console.log("Password should have at max 20 characters");
            return;
        }
        else if (confirmPassword !== password) {
            console.log("Password and confirm password don't match");
            return;
        }
        else {
            console.log("All form inputs are valid");
        }
    }

    return (
        <form className={styles.form} onSubmit={handleSubmitForm}>
            <div className={styles.input_group}>
                <label htmlFor={"username"}>Username</label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    value={formData.username}
                    onChange={handleOnChange}
                />
            </div>
            <div className={styles.input_group}>
                <label htmlFor={"email"}>Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleOnChange}
                />
            </div>
            <div className={styles.input_group}>
                <label htmlFor={"password"}>Password</label>
                <input
                    type="text"
                    name="password"
                    id="password"
                    value={formData.password}
                    onChange={handleOnChange}
                />
            </div>
            <div className={styles.input_group}>
                <label htmlFor={"confirmPassword"}>Confirm Password</label>
                <input
                    type="text"
                    name="confirmPassword"
                    id="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleOnChange}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default SignupForm;