import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { SideBar, CardTask } from "../../components";
import styles from './styles.module.css';
import { isAuthenticated } from "../../utils/tokenUtil";
import { TaskService } from "../../services";

export default function Task() {
    const { workspaceId } = useParams(); 
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    // Verificação de autenticação
    useEffect(() => {
        if (!isAuthenticated()) {
            navigate("/login");
        }
    }, [navigate]);

    // Busca das tasks
    useEffect(() => {
        async function fetchTasksByWorkspace() {
            if (!workspaceId) return;
            
            try {
                setLoading(true);
                const tasksData = await TaskService.getTasks(workspaceId);
                setTasks(tasksData);
                setError(null);
            } catch (error) {
                console.error("Erro ao buscar tasks:", error);
                setError("Erro ao carregar tarefas");
                setTasks([]);
            } finally {
                setLoading(false);
            }
        }

        fetchTasksByWorkspace();
    }, [workspaceId]);

    const handleRefreshTasks = async () => {
        try {
            setLoading(true);
            const tasksData = await TaskService.getTasks(workspaceId);
            setTasks(tasksData);
            setError(null);
        } catch (error) {
            setError("Erro ao atualizar tarefas");
        } finally {
            setLoading(false);
        }
    };

    if (!workspaceId) {
        return <div className={styles.error}>Workspace não especificado</div>;
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Tarefas do Workspace</h1>
            </div>
            
            <SideBar />
            
            <div className={styles.taskContainer}>
                {loading ? (
                    <p className={styles.loading}>Carregando...</p>
                ) : error ? (
                    <p className={styles.error}>{error}</p>
                ) : tasks.length > 0 ? (
                    tasks.map((task) => (
                        <CardTask 
                            key={task.id}
                            task={task}
                            onDelete={handleRefreshTasks}
                            onUpdate={handleRefreshTasks}
                        />
                    ))
                ) : (
                    <p className={styles.emptyMessage}>Nenhuma tarefa encontrada</p>
                )}
            </div>
        </div>
    );
}