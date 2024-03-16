import styles from "./style.module.css";

const ProgressBar = ({
    progress = 0
}) => {
    return (
        <div className={styles.container}>
            <div className={styles.progress} style={{
                width: `${progress}%`
            }}>
                {progress}%
            </div>
        </div>
    )
}

export default ProgressBar;