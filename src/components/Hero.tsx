import React from 'react';
import { Shield, Clock3, Award } from 'lucide-react';
import {
  heroContent,
  PURCHASE_LINK,
  CONSULT_LINK,
  type HeroFeatureKey,
  type Language,
} from '../content/marketing';

const iconMap: Record<HeroFeatureKey, typeof Shield> = {
  shield: Shield,
  clock: Clock3,
  award: Award,
};

interface HeroProps {
  language: Language;
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const content = heroContent[language];

  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-aws-blue-dark to-aws-blue">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <span className="uppercase tracking-[0.3em] text-sm font-semibold text-aws-orange block mb-4">
              {language === 'en' ? 'AWS Audit Specialists' : 'Especialistas em Auditoria AWS'}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 animate-fade-in">
              {content.headline}
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-200 mb-6">
              {content.subheading}
            </h2>
            <p className="text-gray-300 mb-8 max-w-xl">
              {content.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={PURCHASE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-aws-orange hover:bg-aws-orange-dark text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105 text-center"
                aria-label={content.primaryCtaAria}
              >
                {content.primaryCtaLabel}
              </a>
              <a
                href={CONSULT_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-bold py-3 px-6 rounded-lg transition-all text-center"
                aria-label={content.secondaryCtaAria}
              >
                {content.secondaryCtaLabel}
              </a>
            </div>
          </div>
          <div className="md:w-1/2 animate-float">
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 shadow-xl">
                <div className="grid grid-cols-1 gap-8">
                  {content.features.map((feature) => {
                    const Icon = iconMap[feature.icon];
                    return (
                      <div
                        key={feature.title}
                        className="flex items-start space-x-4 transition-all hover:bg-white/5 p-4 rounded-lg"
                      >
                        <div className="bg-aws-blue-light p-3 rounded-lg">
                          <Icon className="h-6 w-6 text-aws-orange" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-1">{feature.title}</h3>
                          <p className="text-gray-300">{feature.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
