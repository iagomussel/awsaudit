import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQProps {
  language: 'en' | 'pt';
}

const FAQ: React.FC<FAQProps> = ({ language }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const content = {
    en: {
      title: 'Frequently Asked Questions',
      questions: [
        {
          question: 'What exactly is included in the AWS audit?',
          answer: 'Our AWS audit includes a comprehensive review of your infrastructure security, compliance status, cost optimization opportunities, performance analysis, and best practices implementation. We examine IAM configurations, network security, data protection measures, logging and monitoring setup, and disaster recovery preparations.'
        },
        {
          question: 'How do you access our AWS environment?',
          answer: 'We use temporary, limited-access credentials provided by you. We can work with read-only access for most assessments. All access methods follow AWS security best practices and can be revoked immediately after the audit is completed.'
        },
        {
          question: 'Do I need to prepare anything before the audit?',
          answer: 'Yes, you\'ll need to provide basic information about your AWS environment, business requirements, and specific concerns. We\'ll send you a pre-audit questionnaire and guide you through the process of granting appropriate access for the assessment.'
        },
        {
          question: 'What does the final report include?',
          answer: 'The final report includes an executive summary, detailed findings with severity ratings, screenshots of identified issues, step-by-step remediation instructions, best practices recommendations, and a prioritized action plan tailored to your organization\'s needs.'
        },
        {
          question: 'Can you help implement the recommended changes?',
          answer: 'Yes! While the audit itself focuses on assessment and recommendations, we offer implementation services as a separate engagement. We can either guide your team through the implementation process or handle the remediation work directly.'
        },
        {
          question: 'Is my data safe during the audit process?',
          answer: 'Absolutely. We follow strict security protocols and confidentiality agreements. We don\'t extract customer data during our assessments, and all access logs are available for your review. Our focus is on configurations and security settings, not on accessing actual data.'
        }
      ]
    },
    pt: {
      title: 'Perguntas Frequentes',
      questions: [
        {
          question: 'O que exatamente está incluído na auditoria AWS?',
          answer: 'Nossa auditoria AWS inclui uma revisão abrangente da segurança da infraestrutura, status de conformidade, oportunidades de otimização de custos, análise de desempenho e implementação de melhores práticas. Examinamos configurações IAM, segurança de rede, medidas de proteção de dados, configuração de log e monitoramento, e preparações para recuperação de desastres.'
        },
        {
          question: 'Como vocês acessam nosso ambiente AWS?',
          answer: 'Utilizamos credenciais temporárias de acesso limitado fornecidas por você. Podemos trabalhar com acesso somente leitura para a maioria das avaliações. Todos os métodos de acesso seguem as melhores práticas de segurança da AWS e podem ser revogados imediatamente após a conclusão da auditoria.'
        },
        {
          question: 'Preciso preparar algo antes da auditoria?',
          answer: 'Sim, você precisará fornecer informações básicas sobre seu ambiente AWS, requisitos de negócios e preocupações específicas. Enviaremos um questionário pré-auditoria e orientaremos você durante o processo de concessão de acesso apropriado para a avaliação.'
        },
        {
          question: 'O que o relatório final inclui?',
          answer: 'O relatório final inclui um resumo executivo, descobertas detalhadas com classificações de severidade, capturas de tela de problemas identificados, instruções passo a passo para remediação, recomendações de melhores práticas e um plano de ação priorizado adaptado às necessidades da sua organização.'
        },
        {
          question: 'Vocês podem ajudar a implementar as mudanças recomendadas?',
          answer: 'Sim! Embora a auditoria em si se concentre na avaliação e recomendações, oferecemos serviços de implementação como um engajamento separado. Podemos orientar sua equipe pelo processo de implementação ou lidar diretamente com o trabalho de remediação.'
        },
        {
          question: 'Meus dados estão seguros durante o processo de auditoria?',
          answer: 'Absolutamente. Seguimos protocolos rigorosos de segurança e acordos de confidencialidade. Não extraímos dados de clientes durante nossas avaliações, e todos os logs de acesso estão disponíveis para sua revisão. Nosso foco está nas configurações e definições de segurança, não no acesso aos dados reais.'
        }
      ]
    }
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-aws-blue mb-4">
            {content[language].title}
          </h2>
        </div>

        <div className="max-w-3xl mx-auto divide-y divide-gray-200">
          {content[language].questions.map((item, index) => (
            <div key={index} className="py-5">
              <button
                onClick={() => toggleQuestion(index)}
                className="flex justify-between items-center w-full text-left"
              >
                <h3 className="text-lg font-medium text-gray-900">{item.question}</h3>
                <span className="ml-6 flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-aws-orange" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </span>
              </button>
              {openIndex === index && (
                <div className="mt-3 pr-12">
                  <p className="text-base text-gray-600">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;