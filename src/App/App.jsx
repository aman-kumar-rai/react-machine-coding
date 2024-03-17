import styles from "./style.module.css";
import Tabs from "../examples/Tabs/Tabs";

const App = () => {

    const items = [
        {
            id: "html",
            label: "HTML",
            content: "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser."
        },
        {
            id: "css",
            label: "CSS",
            content: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML."
        },
        {
            id: "javascript",
            label: "Javascript",
            content: "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS."
        },
    ]



    return (
        <div className={styles.container}>
            <Tabs
                items={items}
                defaultValue={items[2].id}
            />
        </div>
    );
}

export default App;