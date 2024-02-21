import Logo from "./components/Logo";
import Nav from "./components/Nav";
import { Fragment } from "react";


import Page01 from "./pages/Page01";
import Page02 from "./pages/Page02";
import Page03 from "./pages/Page03";


export default function App() {
  return (
    <Fragment>
      <header>
        <Logo />
        <Nav />
      </header>
      <main>
        <Page01 />

        <Page02 />

        <Page03 />

      </main>
      <footer>F</footer>
    </Fragment>
  );
}




//js ile string içerisinde js expression ı;

const myStr = `Lorem lorem lorem ${3 + 123}`;