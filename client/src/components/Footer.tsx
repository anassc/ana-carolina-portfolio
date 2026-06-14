interface FooterProps {
  language: 'pt' | 'en';
}

const footerData = {
  pt: {
    copyright: '© 2026 Ana Carolina Costa',
    tagline: 'Desenvolvido com precisão analítica',
    languages: 'Disponível em: Português | English',
  },
  en: {
    copyright: '© 2026 Ana Carolina Costa',
    tagline: 'Built with analytical precision',
    languages: 'Available in: Portuguese | English',
  },
};

export default function Footer({ language }: FooterProps) {
  const data = footerData[language];

  return (
    <footer className="border-t border-border py-12 md:py-16">
      <div className="container">
        <div className="space-y-6 text-center text-sm text-muted-foreground">
          <p>{data.copyright}</p>
          <p className="text-xs">{data.tagline}</p>
          <p className="text-xs">{data.languages}</p>
        </div>
      </div>
    </footer>
  );
}
