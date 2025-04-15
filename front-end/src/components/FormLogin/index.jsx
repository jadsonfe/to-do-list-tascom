import styles from './styles.module.css'
import { UserService } from '../../services'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { setToken } from '../../utils/tokenUtil'

export default function FormLogin() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    const navigate = useNavigate()

    async function handleNavigateWorkspace() {
        navigate('/')
    }

    async function handleSubmit(event) {
        event.preventDefault(); 
        setIsLoading(true);
        setErrorMessage("");

        try {
            const data = await UserService.login(formData.email, formData.password);
        
            setToken(data.token); 
            setFormData({ email: "", password: "" }); 
            handleNavigateWorkspace(); 
        } catch (error) {
            setErrorMessage("Erro ao logar. Tente novamente.");
        }
         finally {
            setIsLoading(false);
        }
    }



    return (
        <>
            <form method="POST" className={styles.formLogin} onSubmit={handleSubmit}>
                {errorMessage && <p className={styles.error}>{errorMessage}</p>}
                <h2>Fazer Login</h2>
                <div className={styles.formGroup}>
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" id="email" name="email" required onChange={handleChange} value={formData.email} />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="password">Senha:</label>
                    <input type="password" id="password" name="password" required onChange={handleChange} value={formData.password} />
                </div>
                <button type="submit" className={styles.buttonLogin} disabled={isLoading}>
                    {isLoading ? "Carregando..." : "Entrar"}
                </button>

            </form>
            <div className={styles.registerLink}>
                <p>Não tem uma conta? <a href="/register">Registrar</a></p>
            </div>
        </>
    )
}