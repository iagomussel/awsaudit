import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

interface BenefitsProps {
  language: 'en' | 'pt';
}

const Benefits: React.FC<BenefitsProps> = ({ language }) => {
  const content = {
    en: {
      title: 'Why Choose Our AWS Audit',
      subtitle: 'Comprehensive security assessment with actionable recommendations',
      benefits: [
        'Detailed inventory of all active AWS resources',
        'Financial analysis with 3-month cost trends',
        'Complete IAM policy security audit',
        'AWS Well-Architected Framework compliance',
        'Prioritized optimization recommendations',
        'Executive presentation and documentation',
        '3 days of post-delivery support',
        'Delivery within 3 business days'
      ],
      cta: 'Get Your Audit Report',
    },
    pt: {
      title: 'Por Que Escolher Nossa Auditoria AWS',
      subtitle: 'Avaliação abrangente de segurança com recomendações acionáveis',
      benefits: [
        'Inventário detalhado de recursos AWS ativos',
        'Análise financeira com tendências de 3 meses',
        'Auditoria completa de políticas IAM',
        'Conformidade com AWS Well-Architected Framework',
        'Recomendações priorizadas de otimização',
        'Apresentação executiva e documentação',
        '3 dias de suporte pós-entrega',
        'Entrega em 3 dias úteis'
      ],
      cta: 'Obtenha Seu Relatório de Auditoria',
    }
  };

  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-aws-blue mb-4">
            {content[language].title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {content[language].subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content[language].benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all hover:shadow-lg hover:translate-y-[-4px]"
            >
              <CheckCircle className="text-aws-orange mb-4 h-8 w-8" />
              <p className="text-gray-800 font-medium">{benefit}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://book.stripe.com/8wM6qC44Sc3ifRKbII"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-aws-blue hover:bg-aws-blue-dark text-white font-medium py-3 px-6 rounded-lg transition-all"
          >
            {content[language].cta}
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Benefits;