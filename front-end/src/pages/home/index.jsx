import { CardWorkspace, AddButton, FormWorkspace, LogOut } from "../../components";
import { useState } from "react";
import styles from "./styles.module.css";
import { isAuthenticated } from "../../utils/tokenUtil";
import { useNavigate } from "react-router";

export default function Home() {

    

    
    const [isModalVisible, setIsModalVisible] = useState(false);



    function handleShowModal() {
        setIsModalVisible(true);
    }

    function handleCloseModal() {
        setIsModalVisible(false);
    }

    return (
        <div className={styles.homePage}>
            
            <LogOut />

            <div className={styles.homeContainer}>
                {Array.from({ length: 12 }).map((_, index) => (
                    <CardWorkspace key={index} />
                ))}
            </div>

            <div className={styles.addButtonContainer}>
                <AddButton onClick={handleShowModal} />
            </div>

            {/* Modal que aparece ao clicar no botão */}
            {isModalVisible && (
                <div className={styles.modalOverlay}>
                    <FormWorkspace onClose={handleCloseModal} />
                </div>
            )}
        </div>
    );
}