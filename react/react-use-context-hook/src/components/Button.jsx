import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export function Button() {
    const theme = useContext(ThemeContext);

    return (
        <button type="button">I am the button with a {theme}</button>
    )
}