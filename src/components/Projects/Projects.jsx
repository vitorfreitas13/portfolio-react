import React from "react";
import "./Projects.css";

const projectsData = [
  {
    id: 1,
    title: "Sistema de Cadastro",
    description: "Sistema web com HTML, CSS, JS e automação Python.",
    link: "#"
  },
  {
    id: 2,
    title: "Portfolio Pessoal",
    description: "Meu portfólio feito em React com várias seções.",
    link: "#"
  },
  {
    id: 3,
    title: "Projeto X",
    description: "Descrição do projeto X aqui.",
    link: "#"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Meus Projetos</h2>
      <div className="projects-grid">
        {projectsData.map(project => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">Ver Projeto</a>
          </div>
        ))}
      </div>
    </section>
  );
}