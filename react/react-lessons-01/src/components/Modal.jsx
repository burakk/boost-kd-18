import styles from "./Modal.module.css";


export const Modal = ({ title = "Modal Title", hasBorders, children }) => {
    console.log(title, hasBorders);
    return (
        <div className={styles.Modal}>
            <div className={styles.ModalContent}>
            {title} {children}
            </div>
        </div>
    );
};
