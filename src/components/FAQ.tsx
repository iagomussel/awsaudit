import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { faqContent, type Language } from '../content/marketing';

type FAQProps = {
  language: Language;
};

export default function FAQ({ language }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const content = faqContent[language];

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="uppercase tracking-[0.3em] text-sm font-semibold text-aws-orange block mb-3">
            {language === 'en' ? 'Need Answers?' : 'Precisa de Respostas?'}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-aws-blue mb-4">
            {content.title}
          </h2>
        </div>

        <div className="max-w-3xl mx-auto divide-y divide-gray-200">
          {content.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question} className="py-5">
                <button
                  onClick={() => toggleQuestion(index)}
                  className="flex justify-between items-center w-full text-left"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                >
                  <h3 className="text-lg font-medium text-gray-900">{item.question}</h3>
                  <span className="ml-6 flex-shrink-0">
                    {isOpen ? (
                      <ChevronUp className="h-5 w-5 text-aws-orange" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </span>
                </button>
                {isOpen && (
                  <div className="mt-3 pr-12" id={`faq-panel-${index}`}>
                    <p className="text-base text-gray-600 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
