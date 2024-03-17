import { useState, useEffect } from "react";
import styles from "./style.module.css";

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [isTimerRunning, setIsTimerRunning] = useState(false);

    useEffect(() => {
        if (isTimerRunning) {
            const intervalId = setInterval(() => {
                if (isTimerRunning) {
                    setTime(prevTime => prevTime + 100)
                }
            }, 100);

            return function cleanup() {
                clearInterval(intervalId);
            }
        }
    }, [isTimerRunning])

    const handleClickToggle = () => {
        setIsTimerRunning(prevIsTimerRunning => !prevIsTimerRunning);
    }

    const handleClickReset = () => {
        setIsTimerRunning(false);
        setTime(0);
    }

    const seconds = Math.round(time / 1000);
    const milliseconds = time % 1000;

    return (
        <div className={styles.container}>
            <p className={styles.timer}>{`${seconds}s ${milliseconds}ms`}</p>
            <div className={styles.controls_container}>
                <button className={styles.btn} onClick={handleClickToggle}>
                    {isTimerRunning ? "Stop" : "Start"}
                </button>
                <button
                    className={styles.btn}
                    onClick={handleClickReset}
                >
                    Reset
                </button>
            </div>
        </div>
    );
}

export default Stopwatch;