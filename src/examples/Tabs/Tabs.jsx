import { useState, useId } from "react";
import { getTabId, getTabPanelId } from "./utils.js";
import styles from "./style.module.css";

const Tabs = ({ items = [], defaultValue = items[0].id }) => {

    const [activeTabId, setActiveTabId] = useState(defaultValue);
    const tabsId = useId();

    const handleClickTab = (event) => {
        const tabId = event.target.getAttribute("data-tab-id");
        setActiveTabId(tabId);
    }

    const handleKeyDown = (event) => {
        const tabId = event.target.getAttribute("data-tab-id");

        if (tabId === null) {
            return;
        }

        const tabIndex = items.findIndex((item) => item.id === tabId);
        let nextTabIndex = -1;

        switch (event.code) {
            case "ArrowLeft":
                nextTabIndex = tabIndex > 0 ? tabIndex - 1 : items.length - 1;
                break;
            case "ArrowRight":
                nextTabIndex = (tabIndex + 1) % items.length;
                break;
            case "Home":
                nextTabIndex = 0;
                break;
            case "End":
                nextTabIndex = items.length - 1;
                break;
            default:
                return;
        }

        const nextTabEl = document.querySelector(`[data-tab-id='${items[nextTabIndex].id}']`);
        nextTabEl.focus();
        nextTabEl.click();
    }

    const activeTab = items.find(item => item.id === activeTabId);

    return (
        <div>
            <div
                className={styles.tab_container}
                role="tablist"
            >
                {items.map((item) => {
                    const tabId = getTabId(tabsId, item.id);
                    const panelId = getTabPanelId(tabsId, item.id);

                    return (
                        <button
                            key={item.id}
                            id={tabId}
                            data-tab-id={item.id}
                            onClick={handleClickTab}
                            onKeyDown={handleKeyDown}
                            role="tab"
                            aria-controls={panelId}
                            className={item.id === activeTabId ? `${styles.tab} ${styles.tab_active}` : styles.tab}
                            tabIndex={item.id === activeTabId ? 0 : -1}
                            aria-selected={item.id === activeTabId}
                        >
                            {item.label}
                        </button>
                    )
                })}
            </div>
            <div>
                {items.map((item) => {
                    const tabId = getTabId(tabsId, item.id);
                    const panelId = getTabPanelId(tabsId, item.id);

                    return (
                        <p
                            key={item.id}
                            id={panelId}
                            role="tabpanel"
                            hidden={item.id !== activeTabId}
                            aria-labelledby={tabId}
                        >
                            {activeTab.content}
                        </p>
                    )
                })}
            </div>
        </div>
    );
}

export default Tabs;