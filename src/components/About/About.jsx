import "./About.css";

function About() {
  return (
    <section className="about" id="sobre">
      <div className="about-container">
        <h2>Sobre Mim</h2>

        <p>
          Sou desenvolvedor Front-End focado em criar interfaces modernas e
          funcionais com React. Tenho experiência com <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong> e
          <strong> Python</strong>.

          Estou sempre buscando evoluir tecnicamente e desenvolver projetos que
          resolvam problemas reais.
        </p>

        <div className="about-skills">
          <div className="skill-group">
            <h3>Front-End</h3>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
          </div>

          <div className="skill-group">
            <h3>Back-End / Dados</h3>
            <span>Python</span>
            <span>MySQL</span>
          </div>

          <div className="skill-group">
            <h3>Ferramentas</h3>
            <span>Git</span>
            <span>GitHub</span>
            <span>Vite</span>
          </div>

          <div className="skill-group">
            <h3>Design</h3>
            <span>Photoshop</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
