import { useState, useId } from "react";
import { getAccordionHeaderId, getAccordionPanelId } from "./utils";
import styles from "./style.module.css";

const Accordion = ({ items = [] }) => {
    const [openItems, setOpenItems] = useState(new Set());
    const accordionId = useId();

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

    return (
        <div>
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
                                <span aria-hidden={true}>{isOpen ? "Close" : "Open"}</span>
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