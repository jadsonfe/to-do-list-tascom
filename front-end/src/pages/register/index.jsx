import { FormRegister } from "../../components";
import styles from './styles.module.css';

export default function Register() {
    return (
    <>
        <div className={styles.registerContainer}> 
            <FormRegister /> 
        </div>
        <a href="login">Login</a>
        <a href="/">Home</a>
    </>
    )
}