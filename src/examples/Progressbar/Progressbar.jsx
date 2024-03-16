import { MIN, MAX } from "./constants";
import { getClampedValue } from "./utils";
import styles from "./style.module.css";

const ProgressBar = ({
    progress = 0
}) => {
    const clampedValue = getClampedValue(progress);

    return (
        <div className={styles.container}>
            <div
                className={styles.progress}
                style={{
                    width: `${clampedValue}%`
                }}
                role="progressbar"
                aria-valuemin={MIN}
                aria-valuemax={MAX}
                aria-valuenow={clampedValue}
            >
                {clampedValue}%
            </div>
        </div>
    )
}

export default ProgressBar;