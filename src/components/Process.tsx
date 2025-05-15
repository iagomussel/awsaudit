import React from 'react';
import { Clipboard, Search, FileText, Presentation as PresentationChart } from 'lucide-react';

interface ProcessProps {
  language: 'en' | 'pt';
}

const Process: React.FC<ProcessProps> = ({ language }) => {
  const content = {
    en: {
      title: 'Our 72-Hour Audit Process',
      subtitle: 'Fast, thorough, and efficient security assessment',
      steps: [
        {
          icon: <Clipboard className="h-10 w-10 text-white" />,
          title: 'Day 1: Initial Assessment',
          description: 'We collect information about your AWS environment, access requirements, and specific concerns.',
          timeframe: 'First 24 hours'
        },
        {
          icon: <Search className="h-10 w-10 text-white" />,
          title: 'Day 2: Deep Analysis',
          description: 'Our AWS certified experts perform a comprehensive analysis of your infrastructure, services, and configurations.',
          timeframe: '24-48 hours'
        },
        {
          icon: <FileText className="h-10 w-10 text-white" />,
          title: 'Day 3: Report Preparation',
          description: 'We compile our findings into a detailed report with prioritized recommendations and action items.',
          timeframe: '48-72 hours'
        },
        {
          icon: <PresentationChart className="h-10 w-10 text-white" />,
          title: 'Delivery & Review',
          description: 'We deliver the final report and schedule a review session to walk through the findings and answer any questions.',
          timeframe: 'Within 72 hours'
        }
      ]
    },
    pt: {
      title: 'Nosso Processo de Auditoria em 72 Horas',
      subtitle: 'Avaliação de segurança rápida, completa e eficiente',
      steps: [
        {
          icon: <Clipboard className="h-10 w-10 text-white" />,
          title: 'Dia 1: Avaliação Inicial',
          description: 'Coletamos informações sobre seu ambiente AWS, requisitos de acesso e preocupações específicas.',
          timeframe: 'Primeiras 24 horas'
        },
        {
          icon: <Search className="h-10 w-10 text-white" />,
          title: 'Dia 2: Análise Profunda',
          description: 'Nossos especialistas certificados AWS realizam uma análise abrangente da sua infraestrutura, serviços e configurações.',
          timeframe: '24-48 horas'
        },
        {
          icon: <FileText className="h-10 w-10 text-white" />,
          title: 'Dia 3: Preparação do Relatório',
          description: 'Compilamos nossas descobertas em um relatório detalhado com recomendações priorizadas e itens de ação.',
          timeframe: '48-72 horas'
        },
        {
          icon: <PresentationChart className="h-10 w-10 text-white" />,
          title: 'Entrega e Revisão',
          description: 'Entregamos o relatório final e agendamos uma sessão de revisão para analisar as descobertas e responder a quaisquer perguntas.',
          timeframe: 'Em até 72 horas'
        }
      ]
    }
  };

  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-aws-blue mb-4">
            {content[language].title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {content[language].subtitle}
          </p>
        </div>

        <div className="relative">
          {/* Timeline connector */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-aws-blue-light transform -translate-x-1/2 z-0"></div>
          
          <div className="space-y-12 md:space-y-0 relative z-10">
            {content[language].steps.map((step, index) => (
              <div 
                key={index}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } md:mb-24`}
              >
                <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                  <h3 className="text-xl font-bold text-aws-blue mb-2">{step.title}</h3>
                  <p className="text-gray-600 mb-2">{step.description}</p>
                  <span className="text-sm font-medium text-aws-orange">{step.timeframe}</span>
                </div>
                
                <div className="my-4 md:my-0 md:mx-auto bg-aws-blue rounded-full p-4 shadow-lg transform transition-all hover:scale-110">
                  {step.icon}
                </div>
                
                <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:text-left md:pl-12' : 'md:text-right md:pr-12'}`}>
                  {/* Empty div for layout balance */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;