import { removeToken } from "../../utils/tokenUtil";
import { useNavigate } from "react-router";
import styles from "./styles.module.css";

function LogOut() {
    const navigate = useNavigate();

    const handleLogout = () => {
        removeToken();
        navigate("/login");
    };

    return (
        <>
            <button onClick={handleLogout} className={styles.logoutButton}>Sair</button>
        </>
    );
}

export default LogOut;
