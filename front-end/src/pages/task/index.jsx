import { SideBar } from "../../components";

import styles from './styles.module.css';
import { CardTask } from "../../components";

export default function Task() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Task</h1>
            </div>
            <SideBar />
            <div className={styles.taskContainer}>
                <CardTask />
                <CardTask />
                <CardTask />

    
            </div>

        </div>
    )
}