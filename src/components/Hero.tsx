import React from 'react';
import { Shield, Clock3, Award } from 'lucide-react';

interface HeroProps {
  language: 'en' | 'pt';
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const content = {
    en: {
      headline: 'AWS Security Audit in 72 Hours',
      subheading: 'Expert AWS Security Assessment & Cost Optimization',
      description: 'Get a comprehensive security assessment and cost optimization report for your AWS environment in just 72 hours. Our AWS-certified experts identify vulnerabilities, compliance gaps, and cost-saving opportunities with actionable recommendations.',
      buyButton: 'Get Started Now',
      consultButton: 'Free Consultation',
      features: [
        {
          icon: <Shield className="h-6 w-6 text-aws-orange" />,
          title: 'Complete Security Analysis',
          description: 'In-depth vulnerability assessment and AWS Well-Architected review'
        },
        {
          icon: <Clock3 className="h-6 w-6 text-aws-orange" />,
          title: '72-Hour Delivery',
          description: 'Detailed report and recommendations within 3 business days'
        },
        {
          icon: <Award className="h-6 w-6 text-aws-orange" />,
          title: 'AWS Certified Experts',
          description: 'Senior specialists with extensive AWS security experience'
        }
      ]
    },
    pt: {
      headline: 'Auditoria AWS em 72 Horas',
      subheading: 'Análise Especializada de Segurança e Custos AWS',
      description: 'Receba uma análise completa de segurança e otimização de custos do seu ambiente AWS em apenas 72 horas. Nossa equipe certificada AWS identifica vulnerabilidades, gaps de conformidade e oportunidades de economia com recomendações práticas.',
      buyButton: 'Contratar Agora',
      consultButton: 'Consulta Gratuita',
      features: [
        {
          icon: <Shield className="h-6 w-6 text-aws-orange" />,
          title: 'Análise Completa de Segurança',
          description: 'Avaliação profunda de vulnerabilidades e revisão AWS Well-Architected'
        },
        {
          icon: <Clock3 className="h-6 w-6 text-aws-orange" />,
          title: 'Entrega em 72 Horas',
          description: 'Relatório detalhado e recomendações em 3 dias úteis'
        },
        {
          icon: <Award className="h-6 w-6 text-aws-orange" />,
          title: 'Especialistas Certificados AWS',
          description: 'Profissionais seniores com vasta experiência em segurança AWS'
        }
      ]
    }
  };

  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-aws-blue-dark to-aws-blue">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 animate-fade-in">
              {content[language].headline}
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-200 mb-6">
              {content[language].subheading}
            </h2>
            <p className="text-gray-300 mb-8 max-w-xl">
              {content[language].description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://book.stripe.com/8wM6qC44Sc3ifRKbII"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-aws-orange hover:bg-aws-orange-dark text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105 text-center"
                aria-label="Contratar auditoria AWS"
              >
                {content[language].buyButton}
              </a>
              <a
                href="https://calendly.com/himmussel/reuniao-inicial"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-bold py-3 px-6 rounded-lg transition-all text-center"
                aria-label="Agendar consulta gratuita"
              >
                {content[language].consultButton}
              </a>
            </div>
          </div>
          <div className="md:w-1/2 animate-float">
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 shadow-xl">
                <div className="grid grid-cols-1 gap-8">
                  {content[language].features.map((feature, index) => (
                    <div 
                      key={index} 
                      className="flex items-start space-x-4 transition-all hover:bg-white/5 p-4 rounded-lg"
                    >
                      <div className="bg-aws-blue-light p-3 rounded-lg">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">{feature.title}</h3>
                        <p className="text-gray-300">{feature.description}</p>
                      </div>
                    </div>
                  ))}
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