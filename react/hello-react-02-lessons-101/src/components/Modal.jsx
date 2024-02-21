import styles from "./Modal.module.css";


export const Modal = ({ title = "Modal Title", hasBorders, children }) => {
    console.log(title, hasBorders);
    return (
        <div className={styles.Modal}>
            {title} {children}
        </div>
    );
};
