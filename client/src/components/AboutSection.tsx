interface AboutSectionProps {
  language: 'pt' | 'en';
}

const aboutData = {
  pt: {
    title: 'Sobre Mim',
    content: `Sou uma Engenheira de Marketing Operations com formação em Biomedicina. Minha trajetória começou na área de saúde, onde desenvolvi um olhar analítico e preciso para resolver problemas complexos. Hoje, aplico essa precisão à automação de operações de marketing e integração de dados.

Especializo-me em construir infraestruturas de automação escaláveis que conectam sistemas, otimizam fluxos de trabalho e geram insights de negócio. Trabalho com n8n, Python e APIs para criar soluções que reduzem trabalho manual e aumentam a eficiência operacional.

Meu objetivo é contribuir para a transformação digital da área de saúde (HealthTech), trazendo as melhores práticas de automação e dados que desenvolvi no MarTech. Acredito que a tecnologia bem aplicada pode salvar vidas e melhorar a qualidade de vida das pessoas.`,
    traits: ['Analítica e precisa', 'Discreta mas determinada', 'Focada em resultados', 'Apaixonada por problemas complexos'],
  },
  en: {
    title: 'About Me',
    content: `I'm a Marketing Operations Engineer with a background in Biomedical Sciences. My journey began in healthcare, where I developed an analytical and precise approach to solving complex problems. Today, I apply that precision to automating marketing operations and data integration.

I specialize in building scalable automation infrastructure that connects systems, optimizes workflows, and generates business insights. I work with n8n, Python, and APIs to create solutions that eliminate manual work and increase operational efficiency.

My goal is to contribute to the digital transformation of healthcare (HealthTech), bringing the best automation and data practices I've developed in MarTech. I believe that well-applied technology can save lives and improve people's quality of life.`,
    traits: ['Analytical and precise', 'Discreet yet determined', 'Results-focused', 'Passionate about complex problems'],
  },
};

export default function AboutSection({ language }: AboutSectionProps) {
  const data = aboutData[language];

  return (
    <section id="about" className="section-spacing border-t border-border">
      <div className="container">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold">
            {data.title}
          </h2>

          {/* Content */}
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            {data.content.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Traits */}
          <div className="grid md:grid-cols-2 gap-4 pt-8">
            {data.traits.map((trait) => (
              <div
                key={trait}
                className="flex items-center gap-3 p-4 rounded-lg bg-secondary border border-border"
              >
                <div className="w-2 h-2 rounded-full bg-foreground flex-shrink-0" />
                <span className="text-foreground font-medium">{trait}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
