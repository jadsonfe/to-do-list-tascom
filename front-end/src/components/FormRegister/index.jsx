import styles from './styles.module.css'

export default function FormRegister() {

  return (
    <form action="/register" method="POST" className={styles.formRegister}> 
      <h2>Registrar</h2>
      <div className={styles.formGroup}> 
        <label htmlFor="name">Nome:</label>
        <input type="text" id="name" name="name" required /> 
      </div>
      <div className={styles.formGroup}> 
        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" name="email" required /> 
      </div>
      <div className={styles.formGroup}> 
        <label htmlFor="password">Senha:</label>
        <input type="password" id="password" name="password" required /> 
      </div>
      <button type="submit" className={styles.buttonRegister}>Registrar</button>
    </form>
  )
}

