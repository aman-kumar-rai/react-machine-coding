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

export default ProgressBar;