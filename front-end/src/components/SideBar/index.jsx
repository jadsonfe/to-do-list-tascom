import styles from './styles.module.css';
import { useState, useEffect } from 'react';
import FormTask from "../FormTask";
import { TaskService } from "../../services";
import { getUserId } from '../../utils/tokenUtil';
import { useParams } from 'react-router-dom'; 

export default function SideBar() {
    const { id: workspaceId } = useParams(); 
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [loading, setLoading] = useState(true);
    const userId = getUserId();
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadTasks() {
            try {
                const tasksData = await TaskService.getTasks(userId);
                setTasks(tasksData);
            } catch (error) {
                console.error("Erro ao carregar tasks:", error);
            } finally {
                setLoading(false);
            }
        }

        if (userId) {
            loadTasks();
        }
    }, [userId]);

    return (
        <aside className={styles.sideBar}>
            <nav className={styles.nav}>
                <a href="/">🏠 Home</a>
            </nav>
            <br />
            <br />
            <h3>Acesso Rápido</h3>
            <div className={styles.card}>Card</div>
            <div className={styles.card}>Card</div>
            <div className={styles.card}>Card</div>
            <div className={styles.card}>Card</div>

            <br />
            <h3>Criar Task</h3>
            <button type="button" className={styles.button} onClick={() => setIsModalVisible(true)}>Criar</button>

            {isModalVisible && (
                <div className={styles.modalOverlay}>
                    <FormTask 
                     workspaceId={workspaceId}
                     userId={userId}
                     onClose={() => setIsModalVisible(false)} />
                </div>
            )}
        </aside>
    );
}
