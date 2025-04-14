import styles from './styles.module.css';

export default function SideBar() {
    return (
        <aside className={styles.sideBar}>
            <nav className={styles.nav}>
                <a href="/">🏠 Home</a>

            </nav>
            <div className={styles.card}>Card</div>
        </aside>
    );
}