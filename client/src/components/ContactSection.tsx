import { Mail, Linkedin, Github, ArrowRight } from 'lucide-react';

interface ContactSectionProps {
  language: 'pt' | 'en';
}

const contactData = {
  pt: {
    title: 'Vamos Conversar?',
    description: 'Estou sempre aberta para discutir projetos, colaborações e oportunidades em MarTech, RevOps ou HealthTech.',
    links: [
      {
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/costa-anacarolina/',
        icon: Linkedin,
      },
      {
        label: 'GitHub',
        url: 'https://github.com/anassc',
        icon: Github,
      },
      {
        label: 'Email',
        url: 'mailto:ana@example.com',
        icon: Mail,
      },
    ],
    cta: 'Enviar Mensagem',
  },
  en: {
    title: 'Let\'s Connect',
    description: 'I\'m always open to discussing projects, collaborations, and opportunities in MarTech, RevOps, or HealthTech.',
    links: [
      {
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/costa-anacarolina/',
        icon: Linkedin,
      },
      {
        label: 'GitHub',
        url: 'https://github.com/anassc',
        icon: Github,
      },
      {
        label: 'Email',
        url: 'mailto:ana@example.com',
        icon: Mail,
      },
    ],
    cta: 'Send Message',
  },
};

export default function ContactSection({ language }: ContactSectionProps) {
  const data = contactData[language];

  return (
    <section id="contact" className="section-spacing border-t border-border">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              {data.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {data.description}
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            {data.links.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border rounded-lg text-foreground font-medium hover:bg-secondary hover:border-foreground transition-all duration-300 ease-out group"
                >
                  <Icon size={20} className="group-hover:translate-x-0.5 transition-all duration-300 ease-out" />
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <a
              href="mailto:ana@example.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background rounded-lg font-medium hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out text-lg"
            >
              {data.cta}
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
