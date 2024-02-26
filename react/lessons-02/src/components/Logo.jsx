
import styles from "./Logo.module.css";

export default function Logo({ content, to }) {
    return (
        <h1 className={styles.Logo}>
            <a href={to} >{content}</a>
        </h1>

    );
}