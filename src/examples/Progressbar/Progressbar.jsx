import { getClampedValue } from "./utils";
import styles from "./style.module.css";

const ProgressBar = ({
    progress = 0
}) => {
    const clampedValue = getClampedValue(progress);

    return (
        <div className={styles.container}>
            <div className={styles.progress} style={{
                width: `${clampedValue}%`
            }}>
                {clampedValue}%
            </div>
        </div>
    )
}

export default ProgressBar;