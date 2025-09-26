import React, { useState, useEffect } from 'react';
import { ShoppingCart } from 'lucide-react';
import { floatingCtaCopy, PURCHASE_LINK, type Language } from '../content/marketing';

interface FloatingCTAProps {
  language: Language;
}

const FloatingCTA: React.FC<FloatingCTAProps> = ({ language }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <a
      href={PURCHASE_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-aws-orange text-white rounded-full shadow-lg p-4 flex items-center transition-all hover:bg-aws-orange-dark transform hover:scale-105 z-50"
      aria-label={language === 'en' ? 'Purchase AWS audit service' : 'Comprar auditoria AWS'}
    >
      <ShoppingCart className="h-5 w-5 mr-2" />
      <span className="font-medium">{floatingCtaCopy[language].label}</span>
    </a>
  );
};

export default FloatingCTA;
