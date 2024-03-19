import { useState, useEffect } from "react";
import styles from "./style.module.css";


const ProgressBar = ({ isEmpty, handleOnComplete }) => {
    const [isComponentRendered, setIsComponentRendered] = useState(false);

    useEffect(() => {
        if (isEmpty || isComponentRendered) {
            return;
        }
        else {
            setIsComponentRendered(true);
        }

    }, [isEmpty, isComponentRendered])

    return (
        <div className={styles.bar}>
            <div
                className={isComponentRendered
                    ? `${styles.bar_fill} ${styles.bar_fill_complete}`
                    : styles.bar_fill
                }
                onTransitionEnd={handleOnComplete}
            >
            </div>
        </div>
    )
}


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