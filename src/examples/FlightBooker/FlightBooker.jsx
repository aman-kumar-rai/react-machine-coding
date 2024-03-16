import { useState } from "react";
import styles from "./style.module.css";

const FlightBooker = () => {
    const [formData, setFormData] = useState({
        mode: "oneway",
        date: "",
        returnDate: ""
    })


    const handleChangeInput = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmitForm = (event) => {
        event.preventDefault();

        const { mode, date, returnDate } = formData;
        const currentDateObj = new Date();

        try {
            if (mode === "oneway") {
                if (date === "") {
                    console.log("Flight date is not selected");
                    return;
                }
                const dateObj = new Date(date);
                if (dateObj <= currentDateObj) {
                    console.error("Flight date is in the past");
                    return;
                }
                console.log(`You have booked a one-way flight on ${date}`)
            }
            else {
                if (date === "") {
                    console.log("Flight date is not selected");
                    return;
                }
                if (returnDate === "") {
                    console.log("Return flight date is not selected")
                    return;
                }
                const dateObj = new Date(date);
                const returnDateObj = new Date(returnDate);

                if (dateObj <= currentDateObj) {
                    console.error("Flight date is in the past");
                    return;
                }
                if (dateObj >= returnDateObj) {
                    console.error("Return date can't be before flight date")
                }
                console.log(`You have booked a return flight, departing on ${date} and returning on ${returnDate}`)
            }
        }
        catch (error) {
            console.error(error);
        }
    }

    return (
        <form className={styles.form} onSubmit={handleSubmitForm}>
            <select value={formData.mode} onChange={handleChangeInput} name="mode">
                <option value={"oneway"}>One-way flight</option>
                <option value={"return"}>Return flight</option>
            </select>
            <input
                type="date"
                name="date"
                value={formData.date}
                aria-label="Flight date"
                onChange={handleChangeInput}
            />
            {formData.mode === "return" && (
                <input
                    type="date"
                    name="returnDate"
                    value={formData.returnDate}
                    aria-label="Return flight date"
                    onChange={handleChangeInput}
                />
            )}
            <button type="submit" className={styles.btn}>Book</button>
        </form>
    );
}

export default FlightBooker;