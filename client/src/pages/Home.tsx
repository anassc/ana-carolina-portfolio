import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import StackSection from '@/components/StackSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

/**
 * Portfolio Homepage - Bilingual (PT/EN)
 * Design: Minimalist & High-End (Inspired by Conner Burton)
 * Focus: MarTech/RevOps Engineer with HealthTech aspirations
 */
export default function Home() {
  const [language, setLanguage] = useState<'pt' | 'en'>('en');

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header language={language} onLanguageChange={setLanguage} />
      
      <main className="pt-16 md:pt-20">
        <HeroSection language={language} />
        <ProjectsSection language={language} />
        <StackSection language={language} />
        <AboutSection language={language} />
        <ContactSection language={language} />
      </main>

      <Footer language={language} />
    </div>
  );
}
