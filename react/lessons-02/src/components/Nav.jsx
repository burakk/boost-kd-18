
import styles from "./Nav.module.css";
export default function Nav() {
    return (
        <ul className={styles.Nav}>
            <NavItem >
                <NavLink to="#">
                    Liste Render Etmek
                </NavLink>
            </NavItem>

            <NavItem>
                <NavLink to="#">
                    Purity - Saflık
                </NavLink>
            </NavItem>

            <NavItem >
                <NavLink to="#">
                    İletişim
                </NavLink>
            </NavItem>
        </ul>
    );
}

function NavItem({ children }) {
    return (
        <li className={styles.NavItem}>
            {children}

        </li>
    );

}

function NavLink({ to, children }) {

    return <a href={to}> {children}</a>
}