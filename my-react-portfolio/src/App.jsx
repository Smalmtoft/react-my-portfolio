import Items from "./Components/Items.jsx";
import genesisImage from "./assets/genesis.jpg";
import responsiveImage from "./assets/responsive-design.jpg";
import gameImage from "./assets/typing-game.jpg";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";


function App() {
  return<div className="page-content">
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/About"element={<About/>}/>
        <Route path="/Contact"element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  </div>

}

export default App
