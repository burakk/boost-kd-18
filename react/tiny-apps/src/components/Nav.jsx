import { NavLink } from "react-router-dom";
import styles from './Nav.module.css';

export default function Nav() {

    return (
        <nav className={styles.Nav}>
            <ul>
                <li>
                    <NavLink to="/">Ana sayfa</NavLink>
                </li>

                <li>
                    <NavLink to="/tiny-quiz-app">
                        Tiny Quiz App
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/accordion">
                        Accordion Menu
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/fiterable-employees-table">
                        Filterable Employees Table
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/tic-tac-toe">
                        TicTacToe
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}