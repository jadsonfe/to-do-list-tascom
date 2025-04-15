import { CardWorkspace, AddButton, FormWorkspace, LogOut } from "../../components";
import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { WorkspaceService } from "../../services";
import { getUserId } from "../../utils/tokenUtil";

export default function Home() {
    const [workspaces, setWorkspaces] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [loading, setLoading] = useState(true);
    const userId = getUserId();

    useEffect(() => {
        async function loadWorkspaces() {
            try {
                const workspacesData = await WorkspaceService.getWorkspaceByUserId(userId);
                setWorkspaces(workspacesData);
            } catch (error) {
                console.error("Erro ao carregar workspaces:", error);
            } finally {
                setLoading(false);
            }
        }
        
        if (userId) {
            loadWorkspaces();
        }
    }, [userId]);

    const handleRefreshWorkspaces = async () => {
        const workspacesData = await WorkspaceService.getWorkspaceByUserId(userId);
        setWorkspaces(workspacesData);
    };

    if (loading) {
        return <div className={styles.loading}>Carregando...</div>;
    }

    return (
        <div className={styles.homePage}>
            <LogOut />
            
            <div className={styles.homeContainer}>
                {workspaces.length > 0 ? (
                    workspaces.map((workspace) => (
                        <CardWorkspace 
                            key={workspace.id}
                            workspace={workspace}
                            onDelete={handleRefreshWorkspaces}
                        />
                    ))
                ) : (
                    <p className={styles.emptyMessage}>Nenhum workspace encontrado</p>
                )}
            </div>

            <div className={styles.addButtonContainer}>
                <AddButton onClick={() => setIsModalVisible(true)} />
            </div>

            {isModalVisible && (
                <div className={styles.modalOverlay}>
                    <FormWorkspace 
                        onClose={() => setIsModalVisible(false)}
                        onSuccess={handleRefreshWorkspaces}
                    />
                </div>
            )}
        </div>
    );
}