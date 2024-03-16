import { useState } from "react";
import styles from "./style.module.css";

const Accordion = ({ items = [] }) => {
    const [openItems, setOpenItems] = useState(new Set());

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
                    return (
                        <section className={styles.section} key={item.id}>
                            <button
                                className={styles.header}
                                data-section-id={item.id}
                                onClick={handleClickToggle}
                            >
                                <span>{item.heading}</span>
                                <span>{isOpen ? "Close" : "Open"}</span>
                            </button>
                            {
                                isOpen && (
                                    <main>
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