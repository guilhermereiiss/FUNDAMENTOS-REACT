import "./bodyC.css";

function Projects() {
    const projectList = [
        { title: "EcoSync", description: "App para conectar pessoas a eventos ecológicos em tempo real, como plantio de árvores e limpezas. Oferece recompensas por atividades sustentáveis e um painel de impacto ambiental." },
        { title: "DreamBuilder", description: "Plataforma que transforma sonhos e ideias em planos de ação usando IA, conectando usuários a recursos e mentores. Inclui ferramentas de colaboração e ajustes de plano." },
        { title: "EmotionMap", description: "App para registrar e visualizar emoções ao longo do tempo e locais. Analisa o impacto de fatores ambientais e sugere atividades para melhorar o bem-estar emocional." },
    ];

    return (
        <section className="projects-section">
            <h2 className="projects-title">Projetos</h2>
            <ul className="projects-lista">
                {projectList.map((project, index) => (
                    <li key={index} className="project-item">
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-description">{project.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Projects;
