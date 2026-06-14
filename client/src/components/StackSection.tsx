interface StackSectionProps {
  language: 'pt' | 'en';
}

const stackData = {
  pt: {
    title: 'Stack & Ferramentas',
    description: 'Tecnologias e plataformas que utilizo para construir soluções escaláveis.',
    categories: [
      {
        name: 'Automação & Workflows',
        items: ['n8n', 'Zapier', 'Make', 'ManyChat', 'Webhooks'],
      },
      {
        name: 'Linguagens de Programação',
        items: ['Python', 'JavaScript/TypeScript', 'SQL', 'C', 'Selenium'],
      },
      {
        name: 'Marketing & CRM',
        items: ['ActiveCampaign', 'RDStation', 'Unbounce', 'Clint'],
      },
      {
        name: 'Design & Frontend',
        items: ['Framer', 'Loveable', 'Google Cloud', 'Supabase'],
      },
      {
        name: 'Banco de Dados & Backend',
        items: ['PostgreSQL', 'SQL', 'APIs', 'Data Pipelines'],
      },
      {
        name: 'Conceitos & Metodologias',
        items: ['Marketing Operations', 'RevOps', 'Web Scraping', 'LP Development'],
      },
    ],
  },
  en: {
    title: 'Stack & Tools',
    description: 'Technologies and platforms I use to build scalable solutions.',
    categories: [
      {
        name: 'Automation & Workflows',
        items: ['n8n', 'Zapier', 'Make', 'ManyChat', 'Webhooks'],
      },
      {
        name: 'Programming Languages',
        items: ['Python', 'JavaScript/TypeScript', 'SQL', 'C', 'Selenium'],
      },
      {
        name: 'Marketing & CRM',
        items: ['ActiveCampaign', 'RDStation', 'Unbounce', 'Clint'],
      },
      {
        name: 'Design & Frontend',
        items: ['Framer', 'Loveable', 'Google Cloud', 'Supabase'],
      },
      {
        name: 'Database & Backend',
        items: ['PostgreSQL', 'SQL', 'APIs', 'Data Pipelines'],
      },
      {
        name: 'Concepts & Methodologies',
        items: ['Marketing Operations', 'RevOps', 'Web Scraping', 'LP Development'],
      },
    ],
  },
};

export default function StackSection({ language }: StackSectionProps) {
  const data = stackData[language];

  return (
    <section id="stack" className="section-spacing border-t border-border">
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

        {/* Stack Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {data.categories.map((category) => (
            <div key={category.name} className="space-y-4">
              <h3 className="text-lg md:text-xl font-bold text-foreground">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full bg-secondary text-foreground text-sm font-medium border border-border hover:border-foreground transition-all duration-300 ease-out"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
