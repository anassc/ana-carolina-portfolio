import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  language: 'pt' | 'en';
  onLanguageChange: (lang: 'pt' | 'en') => void;
}

const navItems = {
  pt: [
    { label: 'Trabalho', href: '#projects' },
    { label: 'Stack', href: '#stack' },
    { label: 'Sobre', href: '#about' },
    { label: 'Contato', href: '#contact' },
  ],
  en: [
    { label: 'Work', href: '#projects' },
    { label: 'Stack', href: '#stack' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
};

export default function Header({ language, onLanguageChange }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const items = navItems[language];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="font-display font-bold text-xl md:text-2xl text-foreground">
          AC
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 ease-out"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Language Switcher & Mobile Menu */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => onLanguageChange(language === 'pt' ? 'en' : 'pt')}
            className="text-xs font-medium px-3 py-1 rounded-full border border-border hover:bg-secondary transition-all duration-300 ease-out"
          >
            {language === 'pt' ? 'EN' : 'PT'}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-secondary rounded-lg transition-all duration-300 ease-out"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden border-t border-border bg-background">
          <div className="container py-4 flex flex-col gap-4">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 ease-out"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
