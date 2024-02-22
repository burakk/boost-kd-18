
import styles from "./Logo.module.css";

export default function Logo({ content, to }) {
    return (
        <div className={styles.Logo}>
            <h1 >
                <a href={to} >{content}</a>
            </h1>
        </div>

    );
}