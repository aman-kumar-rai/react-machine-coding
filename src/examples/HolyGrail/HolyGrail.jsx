import styles from "./style.module.css";

const HolyGrail = () => {
    return (
        <div className={styles.container}>
            <header className={`${styles.header} ${styles.center}`}>Header</header>
            <div className={`${styles.main} ${styles.center}`}>
                <nav className={styles.center}>Navigation</nav>
                <main className={styles.center}>Main</main>
                <aside className={styles.center}>Sidebar</aside>
            </div>
            <footer className={`${styles.footer} ${styles.center}`}>Footer</footer>
        </div>
    );
}

export default HolyGrail;