import { CardWorkspace, AddButton, FormWorkspace } from "../../components";
import { useState } from "react";
import styles from "./styles.module.css";

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
            <a href="login">Sair</a>

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