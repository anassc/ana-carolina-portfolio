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
        items: ['n8n', 'Zapier', 'Make', 'Webhooks'],
      },
      {
        name: 'Linguagens de Programação',
        items: ['Python', 'JavaScript/TypeScript', 'SQL', 'C'],
      },
      {
        name: 'Plataformas & Ferramentas',
        items: ['Google Cloud', 'Supabase', 'PostgreSQL', 'ActiveCampaign'],
      },
      {
        name: 'Conceitos & Metodologias',
        items: ['Marketing Operations', 'RevOps', 'Data Pipelines', 'API Integration'],
      },
    ],
  },
  en: {
    title: 'Stack & Tools',
    description: 'Technologies and platforms I use to build scalable solutions.',
    categories: [
      {
        name: 'Automation & Workflows',
        items: ['n8n', 'Zapier', 'Make', 'Webhooks'],
      },
      {
        name: 'Programming Languages',
        items: ['Python', 'JavaScript/TypeScript', 'SQL', 'C'],
      },
      {
        name: 'Platforms & Tools',
        items: ['Google Cloud', 'Supabase', 'PostgreSQL', 'ActiveCampaign'],
      },
      {
        name: 'Concepts & Methodologies',
        items: ['Marketing Operations', 'RevOps', 'Data Pipelines', 'API Integration'],
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
