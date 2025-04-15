import { SideBar } from "../../components";

import styles from './styles.module.css';
import { CardTask } from "../../components";
import { useNavigate } from "react-router";
import { isAuthenticated } from "../../utils/tokenUtil";

export default function Task() {
    const navigate = useNavigate();
    if (!isAuthenticated()) {
        navigate("/login");
    }
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