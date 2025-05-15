import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Process from './components/Process';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import './styles/animations.css';

function App() {
  const [language, setLanguage] = useState<'en' | 'pt'>('pt');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pt' : 'en');
  };

  return (
    <div className="font-sans">
      <Header language={language} toggleLanguage={toggleLanguage} />
      <main>
        <Hero language={language} />
        <Benefits language={language} />
        <Process language={language} />
        <FAQ language={language} />
        <CTA language={language} />
      </main>
      <Footer language={language} />
      <FloatingCTA language={language} />
    </div>
  );
}

export default App;