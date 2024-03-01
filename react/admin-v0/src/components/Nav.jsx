import { NavLink } from "react-router-dom";

export function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Ana sayfa</NavLink>

                </li>
                <li>
                    <NavLink to="/ürünler">Ürünler</NavLink>

                </li>

            </ul>
        </nav>
    )
}