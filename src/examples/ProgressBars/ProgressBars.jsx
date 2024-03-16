import { useState, useEffect } from "react";
import ProgressBar from "../ProgressBar/ProgressBar.jsx";
import styles from "./style.module.css";


const ProgressBars = () => {

    const [bars, setBars] = useState([]);

    useEffect(() => {
        console.log("Run once only")
        const intervalId = setInterval(() => {
            setBars((prevBars) => {
                return prevBars.map(prevBar => {
                    return {
                        ...prevBar,
                        progress: prevBar.progress < 100 ? prevBar.progress + 10 : prevBar.progress
                    }
                })
            })
        }, 200)


        return function cleanup() {
            clearInterval(intervalId);
        }
    }, [])


    const handleClickAddBar = () => {
        setBars(prevBars => (
            [...prevBars, {
                id: prevBars.length,
                progress: 0
            }]
        ))
    }

    return (
        <div className={styles.container}>
            <button className={styles.btn} onClick={handleClickAddBar}>Add</button>
            <div className={styles.bars_container}>
                {bars.map((bar) => (
                    <ProgressBar progress={bar.progress} key={bar.id} />
                ))}
            </div>
        </div>
    )
}

export default ProgressBars;