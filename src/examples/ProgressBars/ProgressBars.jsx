import { useState, useEffect } from "react";
import styles from "./style.module.css";


const ProgressBar = () => {
    const [isComponentRendered, setIsComponentRendered] = useState(false);

    useEffect(() => {
        setIsComponentRendered(true);
    }, [])

    return (
        <div className={styles.bar}>
            <div
                className={isComponentRendered
                    ? `${styles.bar_fill} ${styles.bar_fill_complete}`
                    : styles.bar_fill
                }
            >
            </div>
        </div>
    )
}


const ProgressBars = () => {
    const [bars, setBars] = useState([]);

    const handleAddBar = () => {
        setBars(prevBars => {
            return [
                ...prevBars,
                prevBars.length
            ]
        })
    }

    return (
        <div className={styles.container}>
            <button onClick={handleAddBar} className={styles.add_btn}>Add</button>
            <div className={styles.bars_container}>
                {
                    bars.map((bar) => (
                        <ProgressBar
                            key={bar}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default ProgressBars;