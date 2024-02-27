import { useState } from "react";
import { MainLogo } from "./components/Logo";
import { MainNav } from "./components/Nav";
import Page01 from "./pages/Page01";
import Page02 from "./pages/Page02";
import Page03 from "./pages/Page03";
import Page04 from "./pages/Page04";


export default function App() {
  const [path, setPath] = useState("/01");

  function changePath(to) {

    setPath(to);
  }

  //changePath funksiyonunu NavLink öğelerine geçirebilir misiniz
  return (
    <>
      <header>
        <MainLogo />
        <MainNav onChangePath={changePath} />
      </header>
      <main>

        {path === "/01" && <Page01 />}

        {path === "/02" && <Page02 />}

        {path === "/03" && <Page03 />}

        {path === "/04" && <Page04 />}

      </main>
      <footer>
        <p>Boost-Kd-18</p>
      </footer>
    </>
  )
}

// export default App;

