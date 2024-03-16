import Accordion from "../examples/Accordion/Accordion";

const App = () => {

    const items = [
        {
            heading: "HTML",
            content: "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
            id: "HTML"
        },
        {
            heading: "CSS",
            content: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
            id: "CSS"
        },
        {
            heading: "JS",
            content: "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
            id: "JS"
        },
    ];

    return (
        <Accordion
            items={items}
        />
    )
}

export default App;