import React from 'react';
import { Quote } from 'lucide-react';
import { testimonialsContent, type Language } from '../content/marketing';

interface TestimonialsProps {
  language: Language;
}

const Testimonials: React.FC<TestimonialsProps> = ({ language }) => {
  const content = testimonialsContent[language];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="uppercase tracking-[0.3em] text-sm font-semibold text-aws-orange block mb-3">
            {language === 'en' ? 'Customer Stories' : 'Histórias de Clientes'}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-aws-blue mb-4">
            {content.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.items.map((item) => (
            <article
              key={item.name}
              className="bg-white rounded-2xl border border-gray-100 p-8 shadow-md shadow-gray-200/30 flex flex-col h-full"
            >
              <Quote className="h-10 w-10 text-aws-orange mb-4" />
              <p className="text-gray-700 leading-relaxed mb-6 flex-1">
                “{item.quote}”
              </p>
              <div className="mt-auto pt-6 border-t border-gray-200">
                <p className="font-semibold text-aws-blue">
                  {item.name}
                </p>
                <p className="text-sm text-gray-500">
                  {item.role} · {item.company}
                </p>
                <p className="text-sm text-aws-orange mt-3 font-medium">
                  {item.highlight}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
