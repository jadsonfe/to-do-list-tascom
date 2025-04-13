import styles from './styles.module.css';


export default function AddButton({ onClick }) {
  return (
    <button className={styles.addButton}onClick={onClick}>
      +
    </button>
  );
}