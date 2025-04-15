import styles from './styles.module.css';

export default function CardTask() {
    return (

            <div className={styles.cardContainer}>
                <div className={styles.card}>
                <h2>Card 1</h2>
                <p>Descrição:</p>
                <p>Status: Em andamento</p>
                <p>Prioridade: 5</p>
                <p>Tags:</p>
                </div>
                <div className={styles.line}>
                <button className={styles.deleteButton}>X</button>
                <button className={styles.editButton}>E</button>
                </div>
            </div>

    )
}