import styles from './styles.module.css'
import { useNavigate } from 'react-router'


export default function CardWorkspace() {
    const navigate = useNavigate()
    function handleNavigateTask() {
        navigate('/task');
    }
    return (
        <>
            <button type='button' className={styles.cardWorkspace} onClick={handleNavigateTask}>
                <h2>Card</h2>
            </button>
        </>
    )
}
