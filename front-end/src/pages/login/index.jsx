import { FormLogin } from "../../components";

import styles from './styles.module.css'; 

export default function Login() {
    return (
    <>
        <div className={styles.loginContainer}> 
            <FormLogin />
        </div>
        <a href="register">Register</a>
        <a href="/">Home</a>
    </>
    )
}