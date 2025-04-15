import styles from './styles.module.css';
import { useState, useEffect } from 'react';
import { TaskService } from '../../services';

export default function FormTask({ onClose, userId }) {

    const [workspaceId, setWorkspaceId] = useState(localStorage.getItem('workspaceId'));

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "",
    status: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {

        const id = localStorage.getItem('workspaceId');
    
        if (id) {
    
          setWorkspaceId(id);
    
        } else {
    
          setErrorMessage('Workspace não encontrado. Tente novamente.');
    
        }
    
      }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!workspaceId) {
      setErrorMessage('Workspace ID é obrigatório!');
      console.error('Workspace ID is required!');
      return;
    }

    if (!userId) {
      setErrorMessage('User ID é obrigatório!');
      console.error('User ID is required!');
      return;
    }

    setIsLoading(true);
    setErrorMessage("");

    try {
      const { title, description, priority, status } = formData;
      const response = await TaskService.createTask(
        workspaceId,
        title,
        description,
        priority,
        status,
        userId
      );
      console.log('Task created:', response);
      onClose();
    } catch (error) {
      console.error('Error creating task:', error);
      setErrorMessage('Erro ao criar a tarefa. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className={styles.formCreate} onSubmit={handleSubmit}>
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
      {isLoading && <p className={styles.loading}>Carregando...</p>}
      <h2>Criar Tarefa</h2>

      <div className={styles.formGroup}>
        <label htmlFor="title">Tarefa:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <label htmlFor="description">Descrição:</label>
        <input
          type="text"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <label htmlFor="priority">Prioridade:</label>
        <select
          id="priority"
          name="priority"
          value={formData.priority}
          onChange={handleChange}
          required
        >
          <option value="">Selecione</option>
          {[...Array(5)].map((_, i) => (
            <option key={i + 1} value={i + 1}>{i + 1}</option>
          ))}
        </select>

        <label htmlFor="status">Status:</label>
        <select
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
          required
        >
          <option value="">Selecione</option>
          <option value="Em andamento">Em andamento</option>
          <option value="Finalizado">Finalizado</option>
        </select>
      </div>

      <button type="submit" className={styles.createButton} disabled={isLoading}>
        {isLoading ? "Criando..." : "Criar"}
      </button>
      <button type="button" className={styles.cancelButton} onClick={onClose}>
        Cancelar
      </button>
    </form>
  );
}