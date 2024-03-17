import { useState } from "react";
import styles from "./style.module.css";

const GenerateTable = () => {
    const [formData, setFormData] = useState({
        rows: "",
        columns: ""
    });
    const [showTable, setShowTable] = useState(false);

    const handleChangeInput = (event) => {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }

    const handleSubmitForm = (event) => {
        event.preventDefault();
        setShowTable(true);
    }

    const rows = Number(formData.rows);
    const columns = Number(formData.columns);

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmitForm} className={styles.form}>
                <div className={styles.input_group}>
                    <label htmlFor="rows">Rows</label>
                    <input
                        type="number"
                        name="rows"
                        id="rows"
                        onChange={handleChangeInput}
                    />
                </div>
                <div className={styles.input_group}>
                    <label htmlFor="columns">Columns</label>
                    <input
                        type="number"
                        name="columns"
                        id="columns"
                        onChange={handleChangeInput}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>

            {showTable && (
                <table className={styles.table}>
                    <tbody>
                        {new Array(rows).fill(1).map((_, rowIndex) => {
                            return (
                                <tr key={rowIndex}>
                                    {new Array(columns).fill(1).map((_, colIndex) => {
                                        return (
                                            <td key={colIndex}>
                                                {(colIndex % 2 === 0) ? (rows * colIndex) + 1 + rowIndex : (rows * (colIndex + 1)) - rowIndex}
                                            </td>
                                        )
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default GenerateTable;