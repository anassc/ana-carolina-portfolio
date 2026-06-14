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

  },
  en: {
    headline: 'Marketing Operations & Automation Engineer',
    tagline: 'Analytical precision applied to digital operations and automation.',
    description: 'Transforming complex workflows into scalable digital solutions. Specializing in MarTech automation, data integration, and RevOps infrastructure.',
    cta1: 'View My Work',
    cta2: 'Download Resume',

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
                href="/ana-carolina-cv.pdf"
                download="Ana-Carolina-Costa-CV.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-secondary transition-all duration-300 ease-out"
              >
                <Download size={18} />
                {data.cta2}
              </a>
            </div>
          </div>

          {/* Right: Professional Photo */}
          <div className="relative">
            <img
              src="/ana-carolina-photo.jpg"
              alt="Ana Carolina Costa"
              className="w-full aspect-square object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
