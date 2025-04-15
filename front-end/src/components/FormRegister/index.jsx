import styles from "./styles.module.css";
import { UserService } from "../../services";
import { useState } from "react";

export default function FormRegister() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    async function handleSubmit(event) {
        event.preventDefault(); // Evita o envio padrão do formulário
        setIsLoading(true);
        setErrorMessage("");

        try {
            await UserService.register(formData.name, formData.email, formData.password); // Faz requisição para criar usuário
            alert("Usuário registrado com sucesso!");
            setFormData({ name: "", email: "", password: "" }); // Limpa o formulário
        } catch (error) {
            setErrorMessage("Erro ao registrar. Tente novamente.");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <form className={styles.formRegister} onSubmit={handleSubmit}>
            <h2>Registrar</h2>

            {errorMessage && <p className={styles.error}>{errorMessage}</p>}

            <div className={styles.formGroup}>
                <label htmlFor="name">Nome:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="email">E-mail:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="password">Senha:</label>
                <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
            </div>

            <button type="submit" className={styles.buttonRegister} disabled={isLoading}>
                {isLoading ? "Registrando..." : "Registrar"}
            </button>
        </form>
    );
}