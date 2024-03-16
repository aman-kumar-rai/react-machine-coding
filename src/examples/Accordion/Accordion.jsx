import { useState } from "react";
import styles from "./style.module.css";

const Accordion = () => {

    const [sections, setSections] = useState([
        {
            heading: "HTML",
            content: "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser",
            id: "HTML"
        },
        {
            heading: "CSS",
            content: "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser",
            id: "CSS"
        },
        {
            heading: "JS",
            content: "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser",
            id: "JS"
        },
    ])

    return (
        <div>
            {
                sections.map(section => (
                    <section className={styles.section} key={section.id}>
                        <header className={styles.header}>
                            <span>{section.heading}</span>
                            <span className={`${styles.icon} ${styles.icon_rotated}`}></span>
                        </header>
                        <main>
                            {section.content}
                        </main>
                    </section>
                ))
            }
        </div>
    )
}

export default Accordion;