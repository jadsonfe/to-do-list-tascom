import styles from './styles.module.css';
import { TaskService } from '../../services';

export default function CardTask( { task } ) {


    return (

            <div className={styles.cardContainer}>
                <div className={styles.card}>
                <h2>{task.title}</h2>
                <p>{task.description}</p>
                <p>{task.priority}</p>
                <p>{task.status}</p>

                </div>
                <div className={styles.line}>
                <button className={styles.deleteButton}>X</button>
                <button className={styles.editButton}>E</button>
                </div>
            </div>

    )
}