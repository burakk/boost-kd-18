import { BottomBar } from "./components/BottomBar";
import { useState } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <button onClick={(e) => { setTheme(theme === "light" ? "dark" : "light") }}>{theme} theme</button>
        <h1>Hello useContext hook</h1>
        <BottomBar />
      </ThemeContext.Provider>
    </>
  )
}




export default App
