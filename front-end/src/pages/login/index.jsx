import { FormLogin } from "../../components";

import styles from './styles.module.css'; // Importando o CSS do componente

export default function Login() {
    return (
        <div className={styles.loginContainer}> 
            <FormLogin /> 
        </div>
    )
}