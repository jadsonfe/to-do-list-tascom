import styles from './styles.module.css';

export default function SideBar() {
    return (
        <aside className={styles.sideBar}>
            <nav className={styles.nav}>
                <a href="/">🏠 Home</a>

            </nav>
            <br />
            <br />
            <h3>Acesso Rapido</h3>
            <div className={styles.card}>Card</div>
            <div className={styles.card}>Card</div>
            <div className={styles.card}>Card</div>
            <div className={styles.card}>Card</div>

            <br />
            <h3>Criar Task</h3>
            <button type="button" className={styles.button}>Criar</button>
        </aside>
    );
}