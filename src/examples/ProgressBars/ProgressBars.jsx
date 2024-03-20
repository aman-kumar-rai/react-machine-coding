import { useState } from "react";
import ProgressBar from "./ProgressBar";
import styles from "./style.module.css";


const ProgressBars = ({ concurrency = 1 }) => {
    const [filledBarsCount, setFilledBarsCount] = useState(0);
    const [bars, setBars] = useState([]);

    const handleAddBar = () => {
        setBars(prevBars => {
            return [
                ...prevBars,
                prevBars.length + 1
            ]
        })
    }

    const handleOnComplete = () => {
        setFilledBarsCount(prevFilledBarsCount => prevFilledBarsCount + 1);
    }

    return (
        <div className={styles.container}>
            <button onClick={handleAddBar} className={styles.add_btn}>Add</button>
            <div className={styles.bars_container}>
                {
                    bars.map((bar) => (
                        <ProgressBar
                            key={bar}
                            isEmpty={bar > filledBarsCount + concurrency}
                            handleOnComplete={handleOnComplete}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default ProgressBars;