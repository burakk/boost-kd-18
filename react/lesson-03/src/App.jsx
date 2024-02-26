import { MainLogo } from "./components/Logo";
import { MainNav } from "./components/Nav";
import Page01 from "./pages/Page01";
import Page02 from "./pages/Page02";


export default function App() {
  const path = "/02";

  function changePath(to) {
    alert(to + " değiştiriliyor")
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

      </main>
      <footer>
        <p>Boost-Kd-18</p>
      </footer>
    </>
  )
}

// export default App;

