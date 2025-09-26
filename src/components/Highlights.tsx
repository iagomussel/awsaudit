import React from 'react';
import { ShieldCheck, Timer, PiggyBank } from 'lucide-react';
import { highlightsContent, type Language } from '../content/marketing';

const iconMap = {
  shield: ShieldCheck,
  timer: Timer,
  piggyBank: PiggyBank,
} as const;

interface HighlightsProps {
  language: Language;
}

const Highlights: React.FC<HighlightsProps> = ({ language }) => {
  const content = highlightsContent[language];

  return (
    <section id="highlights" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="uppercase tracking-[0.3em] text-sm font-semibold text-aws-orange block mb-3">
            {language === 'en' ? 'Proven Impact' : 'Impacto Comprovado'}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-aws-blue mb-4">
            {content.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.items.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={item.label}
                className="bg-gray-50 rounded-2xl border border-gray-100 shadow-md shadow-gray-200/20 p-8 transition-transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-aws-blue text-white rounded-xl p-3 mr-4 shadow-lg shadow-aws-blue/20">
                    <Icon className="h-8 w-8" />
                  </div>
                  <div>
                    <div className="text-3xl font-black text-aws-blue">{item.value}</div>
                    <div className="text-sm font-semibold uppercase tracking-widest text-aws-orange">
                      {item.label}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
