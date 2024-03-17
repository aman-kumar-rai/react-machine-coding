import { useState } from "react";
import styles from "./style.module.css";

const Tabs = ({ items = [], defaultValue = items[0].id }) => {

    const [activeTabId, setActiveTabId] = useState(defaultValue);

    const handleClickTab = (event) => {
        const tabId = event.target.getAttribute("data-tab-id");
        setActiveTabId(tabId);
    }

    const activeTab = items.find(item => item.id === activeTabId);

    return (
        <div>
            <div className={styles.tab_container}>
                {items.map((item) => {
                    return (
                        <button
                            key={item.id}
                            data-tab-id={item.id}
                            onClick={handleClickTab}
                            className={item.id === activeTabId ? `${styles.tab} ${styles.tab_active}` : styles.tab}
                        >
                            {item.label}
                        </button>
                    )
                })}
            </div>
            <div>
                <p>{activeTab.content}</p>
            </div>
        </div>
    );
}

export default Tabs;