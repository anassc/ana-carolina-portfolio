import ProjectCard from './ProjectCard';

interface ProjectsSectionProps {
  language: 'pt' | 'en';
}

const projects = {
  pt: {
    title: 'Projetos em Destaque',
    description: 'Uma seleção dos meus projetos mais recentes focados em automação, dados e operações de marketing.',
    projects: [
      {
        title: 'Rede Mais Onco - Hackathon de Saúde',
        description: 'Projeto desenvolvido em hackathon focado em oncologia e saúde. Demonstra experiência em projetos de impacto social e integração de dados em contextos críticos de saúde.',
        tags: ['Python', 'Data Analysis', 'Healthcare'],
        githubUrl: 'https://github.com/anassc/Hackathon_SBOC_RedeMaisOnco',
        featured: true,
      },
      {
        title: 'Automation Systems',
        description: 'Infraestrutura de automação escalável. Inclui workflows n8n, integrações de APIs e pipelines de dados para operações de marketing.',
        tags: ['n8n', 'APIs', 'Webhooks'],
        githubUrl: 'https://github.com/anassc/automation-systems',
        featured: true,
      },
      {
        title: 'Projetos de Analytics em Python',
        description: 'Coleção de projetos de análise de dados utilizando Python. Demonstra proficiência em SQL, pandas, e visualização de dados.',
        tags: ['Python', 'SQL', 'Data Visualization'],
        githubUrl: 'https://github.com/anassc/data-analytics-python-projects',
      },
      {
        title: 'Análise de Dados com SQL',
        description: 'Projetos focados em análise avançada de dados utilizando SQL. Inclui queries complexas e otimização de performance.',
        tags: ['SQL', 'Database Design', 'Performance'],
        githubUrl: 'https://github.com/anassc/sql-data-analysis',
      },
    ],
  },
  en: {
    title: 'Featured Projects',
    description: 'A selection of my recent projects focused on automation, data, and marketing operations.',
    projects: [
      {
        title: 'Rede Mais Onco - Healthcare Hackathon',
        description: 'Healthcare-focused hackathon project demonstrating expertise in oncology data integration and social impact technology.',
        tags: ['Python', 'Data Analysis', 'Healthcare'],
        githubUrl: 'https://github.com/anassc/Hackathon_SBOC_RedeMaisOnco',
        featured: true,
      },
      {
        title: 'Automation Systems',
        description: 'Scalable automation infrastructure. Includes n8n workflows, API integrations, and data pipelines for marketing operations.',
        tags: ['n8n', 'APIs', 'Webhooks'],
        githubUrl: 'https://github.com/anassc/automation-systems',
        featured: true,
      },
      {
        title: 'Data Analytics Python Projects',
        description: 'Collection of data analysis projects showcasing Python expertise. Demonstrates proficiency in SQL, pandas, and data visualization.',
        tags: ['Python', 'SQL', 'Data Visualization'],
        githubUrl: 'https://github.com/anassc/data-analytics-python-projects',
      },
      {
        title: 'SQL Data Analysis',
        description: 'Advanced data analysis projects using SQL. Includes complex queries and performance optimization.',
        tags: ['SQL', 'Database Design', 'Performance'],
        githubUrl: 'https://github.com/anassc/sql-data-analysis',
      },
    ],
  },
};

export default function ProjectsSection({ language }: ProjectsSectionProps) {
  const data = projects[language];

  return (
    <section id="projects" className="section-spacing border-t border-border">
      <div className="container space-y-12">
        {/* Header */}
        <div className="space-y-4 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold">
            {data.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {data.description}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {data.projects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center pt-8">
          <a
            href="https://github.com/anassc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-foreground font-medium hover:text-muted-foreground transition-all duration-300 ease-out"
          >
            {language === 'pt' ? 'Ver todos os projetos' : 'View all projects'} →
          </a>
        </div>
      </div>
    </section>
  );
}
