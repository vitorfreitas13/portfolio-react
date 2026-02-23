import projeto7Thumb from "../../assets/projeto7-thumb.jpg";
import projeto8Thumb from "../../assets/projeto8-thumb.jpg";
import projeto9Thumb from "../../assets/projeto9-thumb.jpg";
import "./Projects.css";

const projectsData = [
  {
    id: 1,
    image: projeto7Thumb,
    title: "Gerenciador de Tarefas",
    description: "Aplicativo web para criar, visualizar e gerenciar tarefas de forma prática, desenvolvido com React e Tailwind CSS, com armazenamento local (localStorage) para salvar os dados do usuário.",
    link: "https://agendador-de-tarefas-2joq.vercel.app/"
  },
  {
    id: 2,
    image: projeto8Thumb,
    title: "Cadastros de Usuários",
    description: "Aplicação web para registrar e gerenciar dados de usuários/clientes de forma intuitiva, criada com React e Tailwind CSS, com recursos de formulário e armazenamento de informações no navegador.",
    link: "https://cadastros-system.vercel.app/"
  },
  {
    id: 3,
    image: projeto9Thumb,
    title: "Cadastro de Produtos",
    description: "Sistema web para organizar, registrar e gerenciar produtos com eficiência, com tela de login e interface de usuário simples, desenvolvido com HTML, CSS e JavaScript.",
    link: "https://vitorfreitas13.github.io/projeto-site-cadastro/"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Meus Projetos</h2>
      <div className="projects-grid">
        {projectsData.map(project => (
          <div key={project.id} className="project-card">
            <img
            src={project.image}
            alt={project.title}
            className="project-image"
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.link} target="_blank" rel="noopener noreferrer">Ver Projeto</a>
              <a href="github">Ver código</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}