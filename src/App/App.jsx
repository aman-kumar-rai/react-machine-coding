import styles from "./style.module.css";
import Tweet from "../examples/Tweet/Tweet";

const App = () => {

    return (
        <div className={styles.container}>
            <Tweet
                thumbnail={"https://xsgames.co/randomusers/avatar.php?g=male"}
                name="Aman Kumar"
                handle="hshoyo"
                date="Mar 15"
                tweet="I will be the best developer on the face of the planet"
            />
        </div>
    );
}

export default App;