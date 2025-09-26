import React from 'react';
import { Clipboard, Search, FileText, Presentation as PresentationChart } from 'lucide-react';
import { processContent, type Language, type ProcessIconKey } from '../content/marketing';

const iconMap: Record<ProcessIconKey, typeof Clipboard> = {
  clipboard: Clipboard,
  search: Search,
  report: FileText,
  presentation: PresentationChart,
};

interface ProcessProps {
  language: Language;
}

const Process: React.FC<ProcessProps> = ({ language }) => {
  const content = processContent[language];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="uppercase tracking-[0.3em] text-sm font-semibold text-aws-orange block mb-3">
            {language === 'en' ? 'How It Works' : 'Como Funciona'}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-aws-blue mb-4">
            {content.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-aws-blue-light transform -translate-x-1/2 z-0" />

          <div className="space-y-12 md:space-y-0 relative z-10">
            {content.steps.map((step, index) => {
              const Icon = iconMap[step.icon];
              const isEven = index % 2 === 0;
              return (
                <div
                  key={step.title}
                  className={`flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } md:mb-24`}
                >
                  <div className={`md:w-5/12 ${isEven ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                    <h3 className="text-xl font-bold text-aws-blue mb-2">{step.title}</h3>
                    <p className="text-gray-600 mb-2 leading-relaxed">{step.description}</p>
                    <span className="text-sm font-medium text-aws-orange uppercase tracking-widest">{step.timeframe}</span>
                  </div>

                  <div className="my-4 md:my-0 md:mx-auto bg-aws-blue rounded-full p-4 shadow-lg transform transition-all hover:scale-110">
                    <Icon className="h-10 w-10 text-white" />
                  </div>

                  <div className="md:w-5/12" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
