import "./Navbar.css";
import logo from "../../assets/vf.png";;

function Navbar() {
  return (
    <nav className="navbar" id="navbar">
      <img src={logo} alt="Logo" className="logo" />

      <ul className="menu">
        <li><a href="#hero">Home</a></li>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#projects">Projetos</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>

      <button className="btn-cv">Baixar CV</button>
    </nav>
  );
}

export default Navbar;
