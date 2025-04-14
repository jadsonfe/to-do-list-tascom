import { FormRegister } from "../../components";
import styles from './styles.module.css';

export default function Register() {
    return (
    <>
            <a href="login">Login</a>
            <a href="/">Home</a>
        <div className={styles.registerContainer}> 
            <FormRegister /> 
        </div>

    </>
    )
}