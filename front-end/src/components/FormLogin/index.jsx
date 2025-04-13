import styles from './styles.module.css'

export default function FormLogin() {



    return (
        <>
            <form action="/login" method="POST" className={styles.formLogin}>
                <h2>Fazer Login</h2>
                <div className={styles.formGroup}>
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="password">Senha:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit">Entrar</button>
            </form>
            <div className={styles.registerLink}>
                <p>Não tem uma conta? <a href="/register">Registrar</a></p>
            </div>
        </>
    )
}