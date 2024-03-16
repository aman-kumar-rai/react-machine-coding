import { useState, useId } from "react";
import { getAccordionHeaderId, getAccordionPanelId } from "./utils";
import styles from "./style.module.css";

const Accordion = ({ items = [] }) => {
    const [openItems, setOpenItems] = useState(new Set());
    const accordionId = useId();

    const focusOnSection = (id) => {
        const sectionEl = document.querySelector(`[data-section-id='${id}']`);
        sectionEl.focus();
    }

    const handleClickToggle = (event) => {
        const id = event.currentTarget.getAttribute("data-section-id");
        const _openItems = new Set(openItems);
        if (_openItems.has(id)) {
            _openItems.delete(id);
        }
        else {
            _openItems.add(id);
        }
        setOpenItems(_openItems);
    }

    const handleKeyDown = (event) => {
        const activeSectionId = document.activeElement.getAttribute("data-section-id");
        let activeSectionIndex = -1, nextIndex = -1, nextActiveSectionId = "";

        if (activeSectionId === null) {
            return;
        }

        // getting the index of active accordion item
        activeSectionIndex = items.findIndex((item) => item.id === activeSectionId);

        switch (event.code) {
            case "ArrowUp":
                nextIndex = activeSectionIndex - 1 >= 0 ? activeSectionIndex - 1 : items.length - 1;
                break;
            case "ArrowDown":
                nextIndex = (activeSectionIndex + 1) % items.length;
                break;
            case "Home":
                nextIndex = 0;
                break;
            case "End":
                nextIndex = items.length - 1;
                break;
            default:
                return;
        }

        nextActiveSectionId = items[nextIndex].id;
        focusOnSection(nextActiveSectionId);
    }

    return (
        <div
            className={styles.container}
            onKeyDown={handleKeyDown}
        >
            {
                items.map(item => {
                    const isOpen = openItems.has(item.id);
                    const headerId = getAccordionHeaderId(accordionId, item.id);
                    const panelId = getAccordionPanelId(accordionId, item.id);

                    return (
                        <section className={styles.section} key={item.id}>
                            <button
                                className={styles.header}
                                data-section-id={item.id}
                                id={headerId}
                                onClick={handleClickToggle}
                                aria-expanded={isOpen}
                                aria-controls={panelId}
                            >
                                <span>{item.heading}</span>
                                <span aria-hidden={true} className={isOpen ? `${styles.icon} ${styles.icon_rotated}` : styles.icon}></span>
                            </button>
                            {
                                isOpen && (
                                    <main
                                        aria-labelledby={headerId}
                                        id={panelId}
                                    >
                                        {item.content}
                                    </main>
                                )
                            }
                        </section>
                    )
                })
            }
        </div >
    )
}

export default Accordion;