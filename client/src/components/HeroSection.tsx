import { ArrowRight, Download } from 'lucide-react';

interface HeroSectionProps {
  language: 'pt' | 'en';
}

const content = {
  pt: {
    headline: 'Marketing Operations & Automation Engineer',
    tagline: 'Analytical precision applied to digital operations and automation.',
    description: 'Transforming complex workflows into scalable digital solutions. Specializing in MarTech automation, data integration, and RevOps infrastructure.',
    cta1: 'Ver Meu Trabalho',
    cta2: 'Download CV',
    metrics: [
      { label: 'Conexões', value: '425+' },
      { label: 'Repositórios', value: '12+' },
      { label: 'Seguidores', value: '6' },
    ],
  },
  en: {
    headline: 'Marketing Operations & Automation Engineer',
    tagline: 'Analytical precision applied to digital operations and automation.',
    description: 'Transforming complex workflows into scalable digital solutions. Specializing in MarTech automation, data integration, and RevOps infrastructure.',
    cta1: 'View My Work',
    cta2: 'Download Resume',
    metrics: [
      { label: 'Connections', value: '425+' },
      { label: 'Repositories', value: '12+' },
      { label: 'Followers', value: '6' },
    ],
  },
};

export default function HeroSection({ language }: HeroSectionProps) {
  const data = content[language];

  return (
    <section className="pt-32 md:pt-40 pb-20 md:pb-32">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                {data.headline}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-medium">
                {data.tagline}
              </p>
            </div>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg">
              {data.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-foreground text-background rounded-lg font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 ease-out"
              >
                {data.cta1}
                <ArrowRight size={18} />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-secondary transition-all duration-300 ease-out"
              >
                <Download size={18} />
                {data.cta2}
              </a>
            </div>
          </div>

          {/* Right: Image Placeholder + Metrics */}
          <div className="relative">
            {/* Image Placeholder */}
            <div className="aspect-square rounded-lg bg-gradient-to-br from-secondary to-border overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <div className="text-6xl mb-4">📸</div>
                  <p className="text-sm">{language === 'pt' ? 'Foto profissional' : 'Professional photo'}</p>
                </div>
              </div>
            </div>

            {/* Metrics Card */}
            <div className="absolute -bottom-8 -left-8 md:-bottom-12 md:-left-12 bg-background border border-border rounded-lg p-6 shadow-lg backdrop-blur-sm">
              <div className="grid grid-cols-3 gap-6">
                {data.metrics.map((metric) => (
                  <div key={metric.label} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-foreground">
                      {metric.value}
                    </div>
                    <div className="text-xs md:text-sm text-muted-foreground mt-1">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
