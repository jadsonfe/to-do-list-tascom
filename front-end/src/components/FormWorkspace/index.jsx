import styles from "./styles.module.css";
import { useState } from "react";
import { WorkspaceService } from "../../services";
import { useParams } from "react-router-dom"; 
import { getUserId } from "../../utils/tokenUtil";


export default function FormWorkspace({ onClose }) {
    const {id: workspaceId} = useParams();
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        priority: "",
        status: "",
    });

    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    async function handleSubmit(event) {
        event.preventDefault();
        setIsLoading(true);
        setErrorMessage("");

        try {
            await TaskService.createTask(
                workspaceId, // Aqui agora vem da URL
                formData.title,
                formData.description,
                formData.priority,
                formData.status
            );
            setFormData({ title: "", description: "", priority: "", status: "" });
            onClose();
        } catch (error) {
            setErrorMessage("Erro ao criar tarefa. Tente novamente.");
        } finally {
            setIsLoading(false);
        }
    }


    return (
        
                <form action="/workspace" method="POST" className={styles.formCreate} onSubmit={handleSubmit}>
                    {errorMessage && <p className={styles.error}>{errorMessage}</p>}
                    {isLoading && <p className={styles.loading}>Carregando...</p>}

                        <h2>Nova Área de Trabalho</h2>

                    <div className={styles.formGroup}>
                        <label htmlFor="name">Nome:</label>
                        <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange}  />
                    </div>
                    <button type="submit" className={styles.createButton} disabled={isLoading}>
                        {isLoading ? "Carregando..." : "Criar"}
                    </button>
                    <button className={styles.cancelButton} onClick={onClose}>
                            Cancelar
                    </button>

                </form>
    );
}