import "./Hero.css"
import foto from "../../assets/vitor1.png";

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1>
          Olá, eu sou <span>Vitor Freitas</span>
        </h1>

        <h2>Desenvolvedor Front-End</h2>

        <p>
          Crio aplicações modernas com React, focadas em performance
          e experiência do usuário.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">Ver Projetos</button>
          <button className="btn-outline">Contato</button>
        </div>
      </div>

      <div className="hero-image">
        <img src={foto} alt="Freitas" />
      </div>
    </section>
  )
}

export default Hero