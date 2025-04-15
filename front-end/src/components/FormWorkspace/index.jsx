import styles from "./styles.module.css";


export default function FormWorkspace({ onClose }) {

    return (
        
                <form action="/workspace" method="POST" className={styles.formCreate}>

                        <h2>Nova Área de Trabalho</h2>

                    <div className={styles.formGroup}>
                        <label htmlFor="name">Nome:</label>
                        <input type="text" id="name" name="name" required  />
                    </div>
                    <button type="submit" className={styles.createButton}>
                        Criar
                    </button>
                    <button className={styles.cancelButton} onClick={onClose}>
                            Cancelar
                    </button>

                </form>
    );
}