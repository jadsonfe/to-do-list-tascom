import { FormLogin } from "../../components";

import styles from './styles.module.css'; 

export default function Login() {
    return (
    <>
            <a href="/">Home</a>
        <div className={styles.loginContainer}> 
            <FormLogin />
        </div>

    </>
    )
}