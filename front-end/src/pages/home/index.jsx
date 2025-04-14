import { CardWorkspace, AddButton } from "../../components"; 

import styles from './styles.module.css';  

export default function Home() {

    return (
        <>
        <div className={styles.homeContainer}> 
            <CardWorkspace />
            <CardWorkspace />
            <CardWorkspace />
            <CardWorkspace />
            <CardWorkspace />
            <CardWorkspace />
            <CardWorkspace />
            <CardWorkspace />
        </div>
        <div className={styles.addButtonContainer}>
            <AddButton onClick={() => alert('Add new workspace')} />
        </div>
        <a href="login">Login</a>
        <a href="register">Register</a>
        </>
    )
}