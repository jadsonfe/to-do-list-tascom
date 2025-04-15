import styles from './styles.module.css';
import { useNavigate } from 'react-router';
import { WorkspaceService } from '../../services';

export default function CardWorkspace({ workspace, onDelete }) {
    const navigate = useNavigate();

    const handleNavigateTask = () => {
        navigate(`/task/${workspace.id}`);
    };

    const handleDelete = async (e) => {
        e.stopPropagation();
        try {
            await WorkspaceService.deleteWorkspace(workspace.id);
            onDelete();
        } catch (error) {
            console.error("Erro ao deletar workspace:", error);
        }
    };

    return (
        <div 
            className={styles.container}
            onClick={() => navigate(`/task/${workspace.id}`)}
        >
            <button type="button" className={styles.cardWorkspace} onClick={handleNavigateTask}>
            <h2>{workspace.name}</h2>
            </button>
            <button 
            type='button'
                className={styles.deleteButton}
                onClick={handleDelete}
            >
                ×
            </button>
        </div>
    );
}