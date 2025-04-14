import { SideBar } from "../../components";

import styles from './styles.module.css';
import { CardTask } from "../../components";

export default function Task() {
    return (
        <>
            <SideBar />
            <div className={styles.taskContainer}>
                <CardTask />
                <CardTask />
                <CardTask />
            </div>
        </>
    )
}