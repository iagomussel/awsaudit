import React from 'react';
import { ArrowRight, Calendar, CreditCard } from 'lucide-react';
import { ctaContent, CONSULT_LINK, PURCHASE_LINK, type Language } from '../content/marketing';

type CTAProps = {
  language: Language;
};

export default function CTA({ language }: CTAProps) {
  const content = ctaContent[language];

  return (
    <section id="contact" className="py-20 bg-aws-blue text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="uppercase tracking-[0.3em] text-sm font-semibold text-aws-orange block mb-3">
            {language === 'en' ? 'Engage Now' : 'Comece Agora'}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {content.title}
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white text-gray-800 rounded-xl overflow-hidden shadow-xl transform transition-all hover:scale-105">
            <div className="bg-aws-orange p-6 text-white">
              <h3 className="text-2xl font-bold mb-2 flex items-center">
                <CreditCard className="mr-2 h-6 w-6" />
                {content.buyOption.title}
              </h3>
              <p>{content.buyOption.description}</p>
            </div>
            <div className="p-6 flex flex-col h-full">
              {content.buyOption.price && (
                <div className="text-4xl font-bold text-aws-blue mb-6">
                  {content.buyOption.price}
                </div>
              )}
              <ul className="space-y-3 mb-8">
                {content.buyOption.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <ArrowRight className="text-aws-orange mr-2 h-5 w-5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={PURCHASE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-aws-blue hover:bg-aws-blue-dark text-white font-bold py-3 px-4 rounded-lg text-center transition-colors mt-auto"
                aria-label={language === 'en' ? 'Purchase AWS audit service' : 'Comprar auditoria AWS'}
              >
                {content.buyOption.buttonText}
              </a>
            </div>
          </div>

          <div className="bg-aws-blue-light text-white rounded-xl overflow-hidden shadow-xl transform transition-all hover:scale-105">
            <div className="bg-aws-blue-dark p-6">
              <h3 className="text-2xl font-bold mb-2 flex items-center">
                <Calendar className="mr-2 h-6 w-6" />
                {content.consultOption.title}
              </h3>
              <p>{content.consultOption.description}</p>
            </div>
            <div className="p-6 flex flex-col h-full">
              <ul className="space-y-3 mb-8">
                {content.consultOption.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <ArrowRight className="text-aws-orange mr-2 h-5 w-5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={CONSULT_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-aws-orange hover:bg-aws-orange-dark text-white font-bold py-3 px-4 rounded-lg text-center transition-colors mt-auto"
                aria-label={language === 'en' ? 'Schedule a discovery call' : 'Agendar reunião de descoberta'}
              >
                {content.consultOption.buttonText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
