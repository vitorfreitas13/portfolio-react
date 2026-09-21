import { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/vf.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar" id="navbar">
      <img src={logo} alt="Logo" className="logo" />

      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>

      <ul className={`menu ${open ? "active" : ""}`}>
        <li><a href="#hero">Home</a></li>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#projects">Projetos</a></li>
        <li><a href="#footer">Contato</a></li>
      </ul>
      <a href="/curriculo.pdf" download>
      <button className="btn-cv">Baixar CV</button>
      </a>
    </nav>
  );
}

export default Navbar;