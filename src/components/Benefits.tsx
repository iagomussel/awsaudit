import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { benefitsContent, PURCHASE_LINK, type Language } from '../content/marketing';

interface BenefitsProps {
  language: Language;
}

const Benefits: React.FC<BenefitsProps> = ({ language }) => {
  const content = benefitsContent[language];

  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="uppercase tracking-[0.3em] text-sm font-semibold text-aws-orange block mb-3">
            {language === 'en' ? 'Deliverables' : 'Entregáveis'}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-aws-blue mb-4">
            {content.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.benefits.map((benefit) => (
            <div
              key={benefit}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <CheckCircle className="text-aws-orange mb-4 h-8 w-8" />
              <p className="text-gray-800 font-medium leading-relaxed">{benefit}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={PURCHASE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-aws-blue hover:bg-aws-blue-dark text-white font-medium py-3 px-6 rounded-lg transition-all"
            aria-label={language === 'en' ? 'Purchase AWS audit service' : 'Contratar auditoria AWS'}
          >
            {content.ctaLabel}
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
