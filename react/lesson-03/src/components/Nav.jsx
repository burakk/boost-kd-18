import styles from './Nav.module.css';

const MainNav = ({ onChangePath }) => (
    <nav className={styles.MainNav}  >
        <ul>
            <li>
                <NavLink to="01/" onClick={onChangePath}>Interaction - Etkileşim</NavLink>
            </li>
            <li>
                <NavLink to="/02" onClick={onChangePath}>Bir komponentin hafızası - State</NavLink>
            </li>
            <li>
                <NavLink to="/03" onClick={onChangePath}> Komponent hafızasında object saklamak ve güncellemek </NavLink>
            </li>
            <li>
                <NavLink to="/04" onClick={onChangePath}> Komponent hafızasında array - dizi saklamak ve güncellemek </NavLink>
            </li>
        </ul>
    </nav>
)

const NavLink = ({ to = "#", children, onClick }) => {
    function handleClick(e) {
        e.preventDefault();
        onClick(to);
    }

    return (
        <a href={to} onClick={handleClick}>{children}</a>
    )
};



export { NavLink, MainNav };