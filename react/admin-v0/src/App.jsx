import Logo from "./components/Logo"
import { Nav } from "./components/Nav"
import About from "./pages/About"
import Login from "./pages/Login"
import Products from "./pages/Products"
import { Routes, Route } from 'react-router-dom';

function App() {


  return (
    <>
      <header>
        <Logo />

        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/ürünler" element={<Products />} />
          <Route path="/giriş" element={<Login />} />
        </Routes>







      </main>
      <footer>
        <h1>Boost-kd-18</h1>
        <p>Coding is fun?</p>
      </footer>
    </>
  )
}

export default App
