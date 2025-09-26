import React from 'react';
import { Mail, Globe, Shield } from 'lucide-react';
import { footerContent, type Language } from '../content/marketing';

interface FooterProps {
  language: Language;
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const content = footerContent[language];

  return (
    <footer className="bg-aws-blue-dark text-white pt-12 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Shield className="h-8 w-8 text-aws-orange mr-2" />
              <span className="text-2xl font-bold">AWS<span className="text-aws-orange">Audit</span></span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              {content.description}
            </p>
            <div className="flex items-center space-x-4">
              <a href="mailto:contact@awsaudit.com" className="text-gray-300 hover:text-white transition-colors" aria-label="Email AWS Audit">
                <Mail className="h-5 w-5" />
              </a>
              <a href="https://awsaudit.com" className="text-gray-300 hover:text-white transition-colors" aria-label="Visit AWS Audit website">
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{language === 'en' ? 'Links' : 'Links Úteis'}</h3>
            <ul className="space-y-2">
              {content.links.map((link) => (
                <li key={link.text}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{language === 'en' ? 'Legal' : 'Jurídico'}</h3>
            <ul className="space-y-2">
              {content.legal.map((link) => (
                <li key={link.text}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8 text-center md:text-left text-gray-400">
          {content.copyright}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
