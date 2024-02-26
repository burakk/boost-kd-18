import Logo from "./components/Logo";
import Nav from "./components/Nav";
import { Fragment } from "react";


import Page01 from "./pages/Page01";
import Page02 from "./pages/Page02";
import Page03 from "./pages/Page03";
import Page04 from "./pages/Page04";


export default function App() {

  const path = "/03";

 
  return (
    <Fragment>
      <header>
        <Logo />
        <Nav />
      </header>
      <main>
       { path === "/01" && <Page01/>}
       { path === "/02" && <Page02/>}
       { path === "/03" && <Page03/>}
       { path === "/04" && <Page04/>}

      </main>
      <footer>F</footer>
    </Fragment>
  );
}




//js ile string içerisinde js expression ı;

const myStr = `Lorem lorem lorem ${3 + 123}`;