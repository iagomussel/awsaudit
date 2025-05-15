import React from 'react';
import { ArrowRight, Calendar, CreditCard } from 'lucide-react';

interface CTAProps {
  language: 'en' | 'pt';
}

const CTA: React.FC<CTAProps> = ({ language }) => {
  const content = {
    en: {
      title: 'Ready to Secure Your AWS Environment?',
      subtitle: 'Get your comprehensive audit report within 72 hours',
      buyOption: {
        title: 'Purchase Now',
        description: 'Secure your AWS infrastructure with our comprehensive audit service.',
        price: '$499',
        buttonText: 'Buy Now',
        features: [
          'Detailed AWS resource inventory',
          'Financial analysis & cost trends',
          'Complete security assessment',
          'Optimization recommendations',
          'Executive presentation (1 hour)',
          '3 days post-delivery support'
        ]
      },
      consultOption: {
        title: 'Have Questions?',
        description: 'Schedule a free consultation to discuss your specific needs.',
        buttonText: 'Schedule a Call',
        features: [
          '15-minute consultation',
          'No obligation',
          'Speak with an AWS expert',
          'Get answers to your questions',
          'Discuss custom requirements'
        ]
      }
    },
    pt: {
      title: 'Pronto para Proteger seu Ambiente AWS?',
      subtitle: 'Receba seu relatório completo de auditoria em 72 horas',
      buyOption: {
        title: 'Compre Agora',
        description: 'Proteja sua infraestrutura AWS com nosso serviço de auditoria abrangente.',
        price: 'R$2.500',
        buttonText: 'Comprar',
        features: [
          'Inventário detalhado de recursos AWS',
          'Análise financeira e tendências de custos',
          'Avaliação completa de segurança',
          'Recomendações de otimização',
          'Apresentação executiva (1 hora)',
          'Suporte por 3 dias após entrega'
        ]
      },
      consultOption: {
        title: 'Tem Dúvidas?',
        description: 'Agende uma consulta gratuita para discutir suas necessidades específicas.',
        buttonText: 'Agendar Reunião',
        features: [
          'Consulta de 15 minutos',
          'Sem compromisso',
          'Fale com um especialista AWS',
          'Obtenha respostas para suas dúvidas',
          'Discuta requisitos personalizados'
        ]
      }
    }
  };

  return (
    <section id="contact" className="py-20 bg-aws-blue text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {content[language].title}
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            {content[language].subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Buy Option */}
          <div className="bg-white text-gray-800 rounded-xl overflow-hidden shadow-xl transform transition-all hover:scale-105">
            <div className="bg-aws-orange p-6 text-white">
              <h3 className="text-2xl font-bold mb-2 flex items-center">
                <CreditCard className="mr-2 h-6 w-6" />
                {content[language].buyOption.title}
              </h3>
              <p>{content[language].buyOption.description}</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-aws-blue mb-6">
                {content[language].buyOption.price}
              </div>
              <ul className="space-y-3 mb-8">
                {content[language].buyOption.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <ArrowRight className="text-aws-orange mr-2 h-5 w-5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://book.stripe.com/8wM6qC44Sc3ifRKbII"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-aws-blue hover:bg-aws-blue-dark text-white font-bold py-3 px-4 rounded-lg text-center transition-colors"
              >
                {content[language].buyOption.buttonText}
              </a>
            </div>
          </div>

          {/* Consult Option */}
          <div className="bg-aws-blue-light text-white rounded-xl overflow-hidden shadow-xl transform transition-all hover:scale-105">
            <div className="bg-aws-blue-dark p-6">
              <h3 className="text-2xl font-bold mb-2 flex items-center">
                <Calendar className="mr-2 h-6 w-6" />
                {content[language].consultOption.title}
              </h3>
              <p>{content[language].consultOption.description}</p>
            </div>
            <div className="p-6">
              <ul className="space-y-3 mb-8">
                {content[language].consultOption.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <ArrowRight className="text-aws-orange mr-2 h-5 w-5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://calendly.com/himmussel/reuniao-inicial"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-aws-orange hover:bg-aws-orange-dark text-white font-bold py-3 px-4 rounded-lg text-center transition-colors mt-auto"
              >
                {content[language].consultOption.buttonText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;