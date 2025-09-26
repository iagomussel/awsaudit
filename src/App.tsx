import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Benefits from './components/Benefits';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import { type Language } from './content/marketing';
import './styles/animations.css';

function App() {
  const [language, setLanguage] = useState<Language>('pt');

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'pt' : 'en'));
  };

  return (
    <div className="font-sans">
      <Header language={language} toggleLanguage={toggleLanguage} />
      <main>
        <Hero language={language} />
        <Highlights language={language} />
        <Benefits language={language} />
        <Process language={language} />
        <Testimonials language={language} />
        <FAQ language={language} />
        <CTA language={language} />
      </main>
      <Footer language={language} />
      <FloatingCTA language={language} />
    </div>
  );
}

export default App;
