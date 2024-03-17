import { useState } from "react";
import styles from "./style.module.css";

const MortgageCalculator = () => {
    const [formData, setFormData] = useState({
        amount: "",
        term: "",
        rate: ""
    })

    const [results, setResults] = useState({
        monthlyAmount: "1000",
        totalAmount: "",
        totalInterest: ""
    })

    const handleChangeInput = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }))
    }

    const handleSubmitForm = (event) => {
        event.preventDefault();

        const { amount, term, rate } = formData;
        const _monthlyRate = rate / 1200;
        const _monthlyAmount = (amount * _monthlyRate) / (1 - (1 / Math.pow(1 + _monthlyRate, term * 12)));
        const _totalAmount = _monthlyAmount * term * 12;
        const _totalInterest = _totalAmount - amount;

        setResults({
            monthlyAmount: _monthlyAmount,
            totalAmount: _totalAmount,
            totalInterest: _totalInterest
        })
    }

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmitForm}>
                <div className={styles.input_group}>
                    <label htmlFor="amount">Loan Amount:</label>
                    <input
                        type="number"
                        id="amount"
                        name="amount"
                        aria-label="Loan Amount"
                        value={formData.amount}
                        onChange={handleChangeInput}
                    />
                </div>
                <div className={styles.input_group}>
                    <label htmlFor="term">Loan term(years):</label>
                    <input
                        type="number"
                        id="term"
                        name="term"
                        aria-label="Loan term(years)"
                        value={formData.term}
                        onChange={handleChangeInput}
                    />
                </div>
                <div className={styles.input_group}>
                    <label htmlFor="rate">Interest Rate(%):</label>
                    <input
                        type="number"
                        id="rate"
                        name="rate"
                        aria-label="Interest Rate(%)"
                        value={formData.rate}
                        onChange={handleChangeInput}
                    />
                </div>
                <button type="submit">Calculate</button>
            </form>
            <div>
                <p className={styles.result}>
                    <span>Monthly Payment amount:</span>
                    <span>{results.monthlyAmount}</span>
                </p>
                <p className={styles.result}>
                    <span>Total Payment Amount:</span>
                    <span>{results.totalAmount}</span>
                </p>
                <p className={styles.result}>
                    <span>Total Interest Paid:</span>
                    <span>{results.totalInterest}</span>
                </p>
            </div>
        </div>
    );
}

export default MortgageCalculator;