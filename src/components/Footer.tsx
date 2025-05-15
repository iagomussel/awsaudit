import React from 'react';
import { Mail, Globe, Shield } from 'lucide-react';

interface FooterProps {
  language: 'en' | 'pt';
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const content = {
    en: {
      copyright: '© 2025 AWS Audit Service. All rights reserved.',
      description: 'Professional AWS security audit service delivering comprehensive reports within 72 hours.',
      links: [
        { text: 'Home', href: '#' },
        { text: 'Benefits', href: '#benefits' },
        { text: 'Process', href: '#process' },
        { text: 'FAQ', href: '#faq' },
        { text: 'Contact', href: '#contact' }
      ],
      legal: [
        { text: 'Privacy Policy', href: '#' },
        { text: 'Terms of Service', href: '#' }
      ]
    },
    pt: {
      copyright: '© 2025 Serviço de Auditoria AWS. Todos os direitos reservados.',
      description: 'Serviço profissional de auditoria de segurança AWS entregando relatórios abrangentes em 72 horas.',
      links: [
        { text: 'Início', href: '#' },
        { text: 'Benefícios', href: '#benefits' },
        { text: 'Processo', href: '#process' },
        { text: 'Perguntas', href: '#faq' },
        { text: 'Contato', href: '#contact' }
      ],
      legal: [
        { text: 'Política de Privacidade', href: '#' },
        { text: 'Termos de Serviço', href: '#' }
      ]
    }
  };

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
              {content[language].description}
            </p>
            <div className="flex items-center space-x-4">
              <a href="mailto:contact@awsaudit.com" className="text-gray-300 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              {content[language].links.map((link, index) => (
                <li key={index}>
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
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {content[language].legal.map((link, index) => (
                <li key={index}>
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
          {content[language].copyright}
        </div>
      </div>
    </footer>
  );
};

export default Footer;