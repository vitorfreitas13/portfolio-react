import "./Footer.css";

function Footer() {
  return (
    <footer id="footer" className="footer">
      <h2 className="title">Contatos</h2>
      <div className="contact-container">

       <div className="contact-item">
        <img className="contact-image" src="/src/assets/whatsapp.png" alt="Telefone" />
        <a href="https://api.whatsapp.com/send?phone=5562986510690" target="_blank">(62) 98651-0690</a>
       </div> 

       <div className="contact-item">
        <img className="contact-image" src="/src/assets/email.png" alt="Email" />
        <p>dev.vitorfreitas13@gmail.com</p>
       </div>

       <div className="contact-item">
        <img className="contact-image" src="/src/assets/linkedin.png" alt="LinkedIn" />
        <a href="https://www.linkedin.com/in/vitor-freitas-13b0a024a/" target="_blank">LinkedIn</a>
       </div>

       <div className="contact-item">
        <img className="contact-image" src="/src/assets/github.png" alt="GitHub" />
        <p>
  
  <a href="https://github.com/vitorfreitas13" target="_blank">GitHub</a>
  
</p>
       </div>

      </div>

      <p className="copyright">© 2024 Meu Portfolio. Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;
