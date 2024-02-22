
import styles from "./CardList.module.css";
export default function CardList({children}) {
    return (
        <div className={styles.CardList}>
            
            <ul>
                {children}
            </ul>
        </div>
    );
}