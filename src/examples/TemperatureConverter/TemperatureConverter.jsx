import { useState } from "react";
import styles from "./style.module.css";

const TemperatureConverter = () => {
    const [formData, setFormData] = useState({
        celcius: "",
        fahrenheit: ""
    })

    const handleChangeInput = (event) => {
        const { name, value } = event.target;
        let celcius, fahrenheit;

        if (name === "celcius") {
            celcius = Number(value);
            fahrenheit = celcius * 1.8 + 32;
        }
        else {
            fahrenheit = Number(value);
            celcius = (fahrenheit - 32) / 1.8;
        }

        setFormData({
            celcius: celcius,
            fahrenheit: fahrenheit
        })
    }

    return (
        <form className={styles.form}>
            <div className={styles.input_group}>
                <input
                    type="number"
                    id="celcius"
                    name="celcius"
                    aria-label="Celcius"
                    value={formData.celcius}
                    onChange={handleChangeInput}
                />
                <label htmlFor="celcius">Celcius</label>
            </div>
            <span className={styles.separator}>=</span>
            <div className={styles.input_group}>
                <input
                    type="number"
                    id="fahrenheit"
                    name="fahrenheit"
                    aria-label="fahrenheit"
                    value={formData.fahrenheit}
                    onChange={handleChangeInput}
                />
                <label htmlFor="fahrenheit">Fahrenheit</label>
            </div>
        </form>
    )
}

export default TemperatureConverter;