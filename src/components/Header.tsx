import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import {
  navigationLinks,
  headerCopy,
  PURCHASE_LINK,
  type Language,
} from '../content/marketing';

interface HeaderProps {
  language: Language;
  toggleLanguage: () => void;
}

const Header: React.FC<HeaderProps> = ({ language, toggleLanguage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = navigationLinks[language];
  const { cta } = headerCopy[language];

  const ctaLabel = language === 'en' ? 'Purchase audit service' : 'Contratar serviço de auditoria';

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold text-aws-blue" aria-label="AWS Audit home">
            AWS<span className="text-aws-orange">Audit</span>
          </a>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.text}
              href={item.href}
              className="font-medium text-gray-700 hover:text-aws-orange transition-colors"
            >
              {item.text}
            </a>
          ))}
          <button
            onClick={toggleLanguage}
            className="flex items-center text-gray-700 hover:text-aws-orange"
            aria-label={language === 'en' ? 'Change language to Portuguese' : 'Mudar idioma para inglês'}
          >
            <Globe size={18} className="mr-1" />
            {language === 'en' ? 'PT' : 'EN'}
          </button>
          <a
            href={PURCHASE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-aws-orange text-white font-medium py-2 px-4 rounded hover:bg-aws-orange-dark transition-colors"
            aria-label={ctaLabel}
          >
            {cta}
          </a>
        </nav>

        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.text}
                href={item.href}
                className="font-medium text-gray-700 hover:text-aws-orange transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.text}
              </a>
            ))}
            <button
              onClick={() => {
                toggleLanguage();
                setIsMenuOpen(false);
              }}
              className="flex items-center text-gray-700 hover:text-aws-orange"
              aria-label={language === 'en' ? 'Change language to Portuguese' : 'Mudar idioma para inglês'}
            >
              <Globe size={18} className="mr-1" />
              {language === 'en' ? 'PT' : 'EN'}
            </button>
            <a
              href={PURCHASE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-aws-orange text-white font-medium py-2 px-4 rounded hover:bg-aws-orange-dark transition-colors text-center"
              aria-label={ctaLabel}
            >
              {cta}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
