import "./Footer.css";

function Footer() {
  return (
    <footer id="footer" className="footer">
      <h2 className="title">Contatos</h2>
      <div className="contact-container">

       <div className="contact-item">
        <img className="contact-image" src="/src/assets/whatsapp.png" alt="Telefone" />
        <p>(11) 1234-5678</p>
       </div> 

       <div className="contact-item">
        <img className="contact-image" src="/src/assets/email.png" alt="Email" />
        <p>Meu email</p>
       </div>

       <div className="contact-item">
        <img className="contact-image" src="/src/assets/linkedin.png" alt="LinkedIn" />
        <a>Meu link do Linkedin</a>
       </div>

       <div className="contact-item">
        <img className="contact-image" src="/src/assets/github.png" alt="GitHub" />
        <a>Meu GitHub</a>
       </div>

      </div>

      <p className="copyright">© 2024 Meu Portfolio. Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;
