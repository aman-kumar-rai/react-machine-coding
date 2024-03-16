import { useState } from "react";
import styles from "./style.module.css";

const Accordion = () => {

    const [sections, setSections] = useState([
        {
            heading: "HTML",
            content: "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
            id: "HTML",
            isOpen: false,
        },
        {
            heading: "CSS",
            content: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
            id: "CSS",
            isOpen: false,
        },
        {
            heading: "JS",
            content: "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
            id: "JS",
            isOpen: false,
        },
    ]);

    const handleClickToggle = (event) => {
        const id = event.target.getAttribute("data-section-id");
        setSections(prevSections => {
            return prevSections.map(section => {
                return section.id === id ? {
                    ...section,
                    isOpen: !section.isOpen
                } : section;
            })
        });
    }

    return (
        <div>
            {
                sections.map(section => (
                    <section className={styles.section} key={section.id}>
                        <header className={styles.header}>
                            <span>{section.heading}</span>
                            <button data-section-id={section.id} onClick={handleClickToggle}>{section.isOpen ? "Close" : "Open"}</button>
                        </header>
                        {
                            section.isOpen && (
                                <main>
                                    {section.content}
                                </main>
                            )
                        }
                    </section>
                ))
            }
        </div >
    )
}

export default Accordion;