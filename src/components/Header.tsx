import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';

interface HeaderProps {
  language: 'en' | 'pt';
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

  const navItems = {
    en: [
      { text: 'Benefits', href: '#benefits' },
      { text: 'Process', href: '#process' },
      { text: 'FAQ', href: '#faq' },
      { text: 'Contact', href: '#contact' },
    ],
    pt: [
      { text: 'Benefícios', href: '#benefits' },
      { text: 'Processo', href: '#process' },
      { text: 'Perguntas', href: '#faq' },
      { text: 'Contato', href: '#contact' },
    ],
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-aws-blue">
            AWS<span className="text-aws-orange">Audit</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems[language].map((item) => (
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
          >
            <Globe size={18} className="mr-1" />
            {language === 'en' ? 'PT' : 'EN'}
          </button>
          <a
            href="https://book.stripe.com/8wM6qC44Sc3ifRKbII"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-aws-orange text-white font-medium py-2 px-4 rounded hover:bg-aws-orange-dark transition-colors"
          >
            {language === 'en' ? 'Buy Now' : 'Comprar'}
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems[language].map((item) => (
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
            >
              <Globe size={18} className="mr-1" />
              {language === 'en' ? 'PT' : 'EN'}
            </button>
            <a
              href="https://book.stripe.com/8wM6qC44Sc3ifRKbII"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-aws-orange text-white font-medium py-2 px-4 rounded hover:bg-aws-orange-dark transition-colors text-center"
            >
              {language === 'en' ? 'Buy Now' : 'Comprar'}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;