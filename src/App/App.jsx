import ProgressBar from "../examples/Progressbar/Progressbar";

const App = () => {
    return (
        <div style={{
            margin: "1rem"
        }}>
            <ProgressBar
                progress={80}
            />
        </div>
    );
}

export default App;