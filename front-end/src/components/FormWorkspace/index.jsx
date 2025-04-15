import styles from "./styles.module.css";
import { useState } from "react";
import { WorkspaceService } from "../../services";


export default function FormWorkspace({ onClose }) {
    const [formData, setFormData] = useState({
        name: "",
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
        event.preventDefault(); // Evita o envio padrão do formulário
        setIsLoading(true);
        setErrorMessage("");

        try {
            await WorkspaceService.createWorkspace(formData.name); // Faz requisição para criar usuário
            setFormData({ name: "" }); // Limpa o formulário
            onClose(); // Fecha o formulário
        } catch (error) {
            setErrorMessage("Erro ao criar área de trabalho. Tente novamente.");
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