import React, { useState, useEffect } from 'react';
import { ShoppingCart } from 'lucide-react';

interface FloatingCTAProps {
  language: 'en' | 'pt';
}

const FloatingCTA: React.FC<FloatingCTAProps> = ({ language }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 500px
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const buttonText = language === 'en' ? 'Buy Now' : 'Comprar';

  if (!isVisible) return null;

  return (
    <a
      href="https://book.stripe.com/8wM6qC44Sc3ifRKbII"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-aws-orange text-white rounded-full shadow-lg p-4 flex items-center transition-all hover:bg-aws-orange-dark transform hover:scale-105 z-50"
    >
      <ShoppingCart className="h-5 w-5 mr-2" />
      <span className="font-medium">{buttonText}</span>
    </a>
  );
};

export default FloatingCTA;