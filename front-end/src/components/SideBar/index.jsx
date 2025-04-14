import styles from './styles.module.css'

export default function SideBar() {
    return (
        <aside className={styles.sideBar}>
            <a href="/">Home</a>
            <div className={styles.card}>Card</div>
        </aside>
    )
}