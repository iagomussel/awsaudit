export type Language = 'en' | 'pt';

export type Localized<T> = Record<Language, T>;

export const PURCHASE_LINK = 'https://book.stripe.com/8wM6qC44Sc3ifRKbII';
export const CONSULT_LINK = 'https://calendly.com/himmussel/reuniao-inicial';

export const navigationLinks: Localized<{ text: string; href: string }[]> = {
  en: [
    { text: 'Why AWS Audit', href: '#benefits' },
    { text: 'Outcomes', href: '#highlights' },
    { text: 'Process', href: '#process' },
    { text: 'Testimonials', href: '#testimonials' },
    { text: 'FAQ', href: '#faq' },
    { text: 'Contact', href: '#contact' },
  ],
  pt: [
    { text: 'Por que AWS Audit', href: '#benefits' },
    { text: 'Resultados', href: '#highlights' },
    { text: 'Processo', href: '#process' },
    { text: 'Depoimentos', href: '#testimonials' },
    { text: 'Perguntas', href: '#faq' },
    { text: 'Contato', href: '#contact' },
  ],
};

export const headerCopy: Localized<{ cta: string }> = {
  en: { cta: 'Start Audit' },
  pt: { cta: 'Contratar Auditoria' },
};

export type HeroFeatureKey = 'shield' | 'clock' | 'award';

interface HeroFeature {
  icon: HeroFeatureKey;
  title: string;
  description: string;
}

interface HeroCopy {
  headline: string;
  subheading: string;
  description: string;
  primaryCtaLabel: string;
  primaryCtaAria: string;
  secondaryCtaLabel: string;
  secondaryCtaAria: string;
  features: HeroFeature[];
}

export const heroContent: Localized<HeroCopy> = {
  en: {
    headline: 'AWS Security & Cost Audit Delivered in 72 Hours',
    subheading: 'Instant clarity on risk, compliance, and spend.',
    description:
      'Senior AWS-certified architects investigate your workloads, uncover misconfigurations, and quantify cost opportunities. You receive a prioritized roadmap that your engineering leaders and executives can act on immediately.',
    primaryCtaLabel: 'Get Started Now',
    primaryCtaAria: 'Purchase the AWS security and cost audit service',
    secondaryCtaLabel: 'Book a Discovery Call',
    secondaryCtaAria: 'Schedule a discovery call with an AWS specialist',
    features: [
      {
        icon: 'shield',
        title: 'Zero-trust security review',
        description: 'Deep dive into IAM, networking, data protection, logging, and resilience.',
      },
      {
        icon: 'clock',
        title: 'Guaranteed 72-hour turnaround',
        description: 'Kickoff within 1 business day and delivery in 3 business days, backed by SLA.',
      },
      {
        icon: 'award',
        title: 'Led by AWS certified experts',
        description: 'Security Specialty and Solutions Architect Professionals guiding every audit.',
      },
    ],
  },
  pt: {
    headline: 'Auditoria de Segurança e Custos AWS em 72 Horas',
    subheading: 'Clareza imediata sobre riscos, conformidade e gastos.',
    description:
      'Arquitetos certificados AWS analisam seus workloads, identificam falhas de configuração e quantificam oportunidades de economia. Você recebe um roteiro priorizado para que líderes técnicos e executivos atuem imediatamente.',
    primaryCtaLabel: 'Comece Agora',
    primaryCtaAria: 'Contratar o serviço de auditoria de segurança e custos AWS',
    secondaryCtaLabel: 'Agendar Reunião',
    secondaryCtaAria: 'Agendar uma reunião de descoberta com um especialista AWS',
    features: [
      {
        icon: 'shield',
        title: 'Revisão de segurança zero-trust',
        description: 'Análise profunda de IAM, rede, proteção de dados, observabilidade e resiliência.',
      },
      {
        icon: 'clock',
        title: 'Entrega garantida em 72 horas',
        description: 'Kickoff em até 1 dia útil e entrega em 3 dias úteis, com SLA assinado.',
      },
      {
        icon: 'award',
        title: 'Conduzido por especialistas certificados',
        description: 'Profissionais AWS Security Specialty e Solutions Architect em todo o processo.',
      },
    ],
  },
};

interface BenefitsCopy {
  title: string;
  subtitle: string;
  benefits: string[];
  ctaLabel: string;
}

export const benefitsContent: Localized<BenefitsCopy> = {
  en: {
    title: 'What You Receive',
    subtitle: 'A turnkey AWS security and cost optimization audit ready for engineers and executives.',
    benefits: [
      'Complete inventory of accounts, regions, and critical workloads',
      'Security posture score aligned with AWS Foundational Security Best Practices',
      'Three-month spend analysis with right-sizing and reservation guidance',
      'IAM privilege escalation, unused access, and key rotation review',
      'Benchmark against the AWS Well-Architected Framework',
      'Risk-ranked remediation backlog with effort estimates and owners',
      'Executive-ready presentation deck and technical appendix',
      'Follow-up office hours to support remediation',
    ],
    ctaLabel: 'Secure Your Audit Slot',
  },
  pt: {
    title: 'O Que Está Incluído',
    subtitle: 'Uma auditoria AWS completa de segurança e custos pronta para engenheiros e executivos.',
    benefits: [
      'Inventário completo de contas, regiões e workloads críticos',
      'Pontuação de postura de segurança alinhada ao AWS Foundational Security Best Practices',
      'Análise de gastos dos últimos 3 meses com recomendações de right-sizing e reservas',
      'Revisão de escalonamento de privilégios IAM, acessos ociosos e rotação de chaves',
      'Benchmark com o AWS Well-Architected Framework',
      'Backlog de remediação priorizado com estimativas de esforço e responsáveis',
      'Apresentação executiva e apêndice técnico prontos para uso',
      'Sessões de office hours para apoiar a implementação',
    ],
    ctaLabel: 'Garanta Sua Auditoria',
  },
};

export type ProcessIconKey = 'clipboard' | 'search' | 'report' | 'presentation';

interface ProcessStep {
  icon: ProcessIconKey;
  title: string;
  description: string;
  timeframe: string;
}

interface ProcessCopy {
  title: string;
  subtitle: string;
  steps: ProcessStep[];
}

export const processContent: Localized<ProcessCopy> = {
  en: {
    title: 'Our 72-Hour Audit Blueprint',
    subtitle: 'A proven workflow executed by senior AWS architects.',
    steps: [
      {
        icon: 'clipboard',
        title: 'Day 1 · Discovery & Scoping',
        description: 'We map your business objectives, compliance targets, and AWS footprint, and align on access requirements.',
        timeframe: '0-24 hours',
      },
      {
        icon: 'search',
        title: 'Day 2 · Deep Security & Cost Analysis',
        description: 'Automated and manual reviews of IAM, networking, data protection, observability, and spending anomalies.',
        timeframe: '24-48 hours',
      },
      {
        icon: 'report',
        title: 'Day 3 · Findings & Remediation Plan',
        description: 'We synthesize findings, quantify impact, and prepare an actionable remediation backlog with owners.',
        timeframe: '48-72 hours',
      },
      {
        icon: 'presentation',
        title: 'Executive Readout & Handover',
        description: 'Final workshop to align stakeholders, answer questions, and outline next steps with optional follow-on support.',
        timeframe: 'Within 72 hours',
      },
    ],
  },
  pt: {
    title: 'Nosso Blueprint de Auditoria em 72 Horas',
    subtitle: 'Fluxo comprovado executado por arquitetos seniores da AWS.',
    steps: [
      {
        icon: 'clipboard',
        title: 'Dia 1 · Descoberta e Escopo',
        description: 'Mapeamos objetivos de negócio, metas de conformidade e footprint AWS, alinhando requisitos de acesso.',
        timeframe: '0-24 horas',
      },
      {
        icon: 'search',
        title: 'Dia 2 · Análise Profunda de Segurança e Custos',
        description: 'Revisões automáticas e manuais de IAM, rede, proteção de dados, observabilidade e anomalias de gastos.',
        timeframe: '24-48 horas',
      },
      {
        icon: 'report',
        title: 'Dia 3 · Achados e Plano de Remediação',
        description: 'Sintetizamos resultados, quantificamos impacto e preparamos backlog acionável com responsáveis.',
        timeframe: '48-72 horas',
      },
      {
        icon: 'presentation',
        title: 'Apresentação Executiva e Handover',
        description: 'Workshop final para alinhar stakeholders, tirar dúvidas e definir próximos passos com suporte opcional.',
        timeframe: 'Até 72 horas',
      },
    ],
  },
};

interface HighlightItem {
  icon: 'shield' | 'timer' | 'piggyBank';
  value: string;
  label: string;
  description: string;
}

interface HighlightsCopy {
  title: string;
  subtitle: string;
  items: HighlightItem[];
}

export const highlightsContent: Localized<HighlightsCopy> = {
  en: {
    title: 'Outcomes You Can Take to the Board',
    subtitle: 'Measurable impact delivered across regulated, high-scale workloads.',
    items: [
      {
        icon: 'shield',
        value: '120+',
        label: 'AWS environments audited',
        description: 'Fintech, SaaS, e-commerce, and healthtech platforms in multiple regions.',
      },
      {
        icon: 'timer',
        value: '72h',
        label: 'Guaranteed turnaround',
        description: 'Kickoff within 1 business day and board-ready report within 72 hours.',
      },
      {
        icon: 'piggyBank',
        value: '$3.2M',
        label: 'Identified annual savings',
        description: 'Average 23% reduction in avoidable AWS spend across recent engagements.',
      },
    ],
  },
  pt: {
    title: 'Resultados para Apresentar ao Board',
    subtitle: 'Impacto mensurável entregue em workloads regulados e de alta escala.',
    items: [
      {
        icon: 'shield',
        value: '120+',
        label: 'Ambientes AWS auditados',
        description: 'Plataformas fintech, SaaS, e-commerce e healthtech em várias regiões.',
      },
      {
        icon: 'timer',
        value: '72h',
        label: 'Prazo garantido',
        description: 'Kickoff em até 1 dia útil e relatório pronto para diretoria em 72 horas.',
      },
      {
        icon: 'piggyBank',
        value: 'US$ 3,2 mi',
        label: 'Economia anual identificada',
        description: 'Média de 23% de redução em gastos evitáveis nas auditorias recentes.',
      },
    ],
  },
};

interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  company: string;
  highlight: string;
}

interface TestimonialsCopy {
  title: string;
  subtitle: string;
  items: TestimonialItem[];
}

export const testimonialsContent: Localized<TestimonialsCopy> = {
  en: {
    title: 'Trusted by Engineering Leaders',
    subtitle: 'Security, platform, and FinOps teams rely on our specialists for fast, actionable insight.',
    items: [
      {
        quote:
          'The audit gave us the exact evidence we needed for our board and regulators. The remediation backlog was prioritized with effort estimates, which made execution painless.',
        name: 'Laura Mendes',
        role: 'Head of Cloud Security',
        company: 'NovaPay',
        highlight: 'Reduced critical misconfigurations by 78% and accelerated ISO 27001 recertification.',
      },
      {
        quote:
          'In three days we uncovered idle spend and risky IAM policies that had been missed for months. The team translated complex findings into business impact for leadership.',
        name: 'Chris Howard',
        role: 'VP of Engineering',
        company: 'Northwind Commerce',
        highlight: 'Unlocked $420k in annual AWS savings while meeting PCI DSS audit requirements.',
      },
      {
        quote:
          'Their Well-Architected review exposed observability gaps before our peak season. The follow-up office hours kept momentum high and aligned our DevOps team.',
        name: 'Renata Carvalho',
        role: 'Director of Platform Engineering',
        company: 'Brightline Health',
        highlight: 'Improved incident response time by 35% with new monitoring and alerting guardrails.',
      },
    ],
  },
  pt: {
    title: 'Confiado por Líderes de Engenharia',
    subtitle: 'Times de segurança, plataforma e FinOps contam conosco para obter rapidamente insights acionáveis.',
    items: [
      {
        quote:
          'A auditoria trouxe exatamente as evidências que precisávamos para o board e órgãos reguladores. O backlog de remediação veio priorizado e com estimativas, facilitando a execução.',
        name: 'Laura Mendes',
        role: 'Head de Segurança em Nuvem',
        company: 'NovaPay',
        highlight: 'Reduziu 78% das falhas críticas e acelerou a recertificação ISO 27001.',
      },
      {
        quote:
          'Em três dias descobrimos gastos ociosos e políticas IAM arriscadas que passaram meses despercebidas. A equipe traduziu achados complexos em impacto de negócios para a diretoria.',
        name: 'Chris Howard',
        role: 'VP de Engenharia',
        company: 'Northwind Commerce',
        highlight: 'Gerou economia anual de R$ 2,1 mi enquanto cumpria requisitos do PCI DSS.',
      },
      {
        quote:
          'A revisão Well-Architected expôs lacunas de observabilidade antes da alta temporada. As office hours mantiveram o ritmo e alinharam o time de DevOps.',
        name: 'Renata Carvalho',
        role: 'Diretora de Engenharia de Plataforma',
        company: 'Brightline Health',
        highlight: 'Melhorou o tempo de resposta a incidentes em 35% com novos guardrails de monitoramento.',
      },
    ],
  },
};

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCopy {
  title: string;
  items: FAQItem[];
}

export const faqContent: Localized<FAQCopy> = {
  en: {
    title: 'Frequently Asked Questions',
    items: [
      {
        question: 'What is required from our team to start the audit?',
        answer:
          'We begin with a 45-minute discovery call to understand objectives and confirm AWS accounts in scope. You provide read-only or least-privilege access using IAM roles; we supply step-by-step instructions and can sign NDAs as needed.',
      },
      {
        question: 'How do you keep our data secure during the engagement?',
        answer:
          'Access is limited to configuration metadata. We never copy customer data. All activity is logged, we use MFA-protected identities, and credentials are revoked immediately after delivery. Our methodology follows AWS and ISO 27001 controls.',
      },
      {
        question: 'What does the final deliverable include?',
        answer:
          'You receive a full report with executive summary, detailed findings with severity ratings, architecture diagrams, cost optimization opportunities, and a prioritized remediation backlog with effort estimates and owners.',
      },
      {
        question: 'Can you help implement the remediation plan?',
        answer:
          'Yes. Implementation support, managed services, and ongoing FinOps monitoring are available as add-on engagements. We can work alongside your team or deliver the changes end-to-end.',
      },
      {
        question: 'Do you work with regulated industries?',
        answer:
          'Absolutely. We regularly support PCI DSS, HIPAA, LGPD, SOC 2, and ISO 27001 programs. We tailor evidence and report language to match your compliance obligations.',
      },
    ],
  },
  pt: {
    title: 'Perguntas Frequentes',
    items: [
      {
        question: 'O que precisamos fornecer para iniciar a auditoria?',
        answer:
          'Começamos com uma call de descoberta de 45 minutos para entender objetivos e confirmar as contas AWS no escopo. Você fornece acesso somente leitura ou de menor privilégio via roles IAM; enviamos instruções detalhadas e assinamos NDA se necessário.',
      },
      {
        question: 'Como vocês garantem a segurança dos nossos dados?',
        answer:
          'O acesso é limitado a metadados de configuração. Nunca copiamos dados de clientes. Toda atividade é logada, usamos identidades protegidas com MFA e as credenciais são revogadas imediatamente após a entrega. Seguimos controles AWS e ISO 27001.',
      },
      {
        question: 'O que está incluso no relatório final?',
        answer:
          'Você recebe um relatório completo com resumo executivo, achados detalhados e severidade, diagramas de arquitetura, oportunidades de otimização de custos e backlog de remediação priorizado com estimativas e responsáveis.',
      },
      {
        question: 'Vocês apoiam a implementação das recomendações?',
        answer:
          'Sim. Suporte de implementação, serviços gerenciados e monitoramento contínuo de FinOps estão disponíveis como extensões. Podemos trabalhar junto com sua equipe ou entregar as mudanças ponta a ponta.',
      },
      {
        question: 'Vocês atendem setores regulados?',
        answer:
          'Com certeza. Atendemos rotineiramente programas PCI DSS, HIPAA, LGPD, SOC 2 e ISO 27001. Adequamos as evidências e a linguagem do relatório às suas obrigações de conformidade.',
      },
    ],
  },
};

interface CTAOption {
  title: string;
  description: string;
  buttonText: string;
  price?: string;
  features: string[];
}

interface CTACopy {
  title: string;
  subtitle: string;
  buyOption: CTAOption;
  consultOption: CTAOption;
}

export const ctaContent: Localized<CTACopy> = {
  en: {
    title: 'Ready for Board-Ready Clarity?',
    subtitle: 'Reserve your audit slot or speak with an AWS specialist today.',
    buyOption: {
      title: 'Purchase the Audit',
      description: 'Lock in your 72-hour AWS security and cost optimization audit.',
      buttonText: 'Start Audit',
      price: '$499',
      features: [
        'Board-ready report delivered in 72 hours',
        'Security, compliance, and cost findings with severity levels',
        'Executive readout with architecture lead (60 minutes)',
        '3 days of post-delivery implementation support',
      ],
    },
    consultOption: {
      title: 'Need to Align Stakeholders?',
      description: 'Book a free discovery call to tailor the engagement to your needs.',
      buttonText: 'Book Discovery Call',
      features: [
        '15-minute consultation with an AWS principal architect',
        'Scope validation and compliance requirements review',
        'Guidance on access provisioning and prerequisites',
        'Custom proposal within 24 hours of the call',
      ],
    },
  },
  pt: {
    title: 'Pronto para Entregar Clareza ao Board?',
    subtitle: 'Garanta sua vaga na auditoria ou fale com um especialista AWS hoje mesmo.',
    buyOption: {
      title: 'Comprar a Auditoria',
      description: 'Garanta a auditoria AWS de segurança e custos com entrega em 72 horas.',
      buttonText: 'Iniciar Auditoria',
      price: 'R$ 2.500',
      features: [
        'Relatório pronto para diretoria em 72 horas',
        'Achados de segurança, conformidade e custos com severidade',
        'Apresentação executiva com arquiteto líder (60 minutos)',
        '3 dias de suporte após a entrega',
      ],
    },
    consultOption: {
      title: 'Precisa Alinhar o Time?',
      description: 'Agende uma call gratuita para ajustar o escopo às suas necessidades.',
      buttonText: 'Agendar Descoberta',
      features: [
        'Consulta de 15 minutos com arquiteto principal AWS',
        'Validação de escopo e requisitos de conformidade',
        'Orientação sobre concessão de acesso e pré-requisitos',
        'Proposta personalizada em até 24 horas após a call',
      ],
    },
  },
};

interface FooterCopy {
  description: string;
  links: { text: string; href: string }[];
  legal: { text: string; href: string }[];
  copyright: string;
}

export const footerContent: Localized<FooterCopy> = {
  en: {
    description: 'AWS security and FinOps specialists delivering production-ready assessments with actionable roadmaps.',
    links: [
      { text: 'Home', href: '#' },
      { text: 'Why AWS Audit', href: '#benefits' },
      { text: 'Outcomes', href: '#highlights' },
      { text: 'Process', href: '#process' },
      { text: 'Testimonials', href: '#testimonials' },
      { text: 'FAQ', href: '#faq' },
    ],
    legal: [
      { text: 'Privacy Policy', href: '#' },
      { text: 'Terms of Service', href: '#' },
    ],
    copyright: '© 2025 AWS Audit Service. All rights reserved.',
  },
  pt: {
    description: 'Especialistas em segurança e FinOps na AWS entregando avaliações prontas para produção com planos acionáveis.',
    links: [
      { text: 'Início', href: '#' },
      { text: 'Por que AWS Audit', href: '#benefits' },
      { text: 'Resultados', href: '#highlights' },
      { text: 'Processo', href: '#process' },
      { text: 'Depoimentos', href: '#testimonials' },
      { text: 'Perguntas', href: '#faq' },
    ],
    legal: [
      { text: 'Política de Privacidade', href: '#' },
      { text: 'Termos de Serviço', href: '#' },
    ],
    copyright: '© 2025 Serviço de Auditoria AWS. Todos os direitos reservados.',
  },
};

export const floatingCtaCopy: Localized<{ label: string }> = {
  en: { label: 'Start Audit' },
  pt: { label: 'Iniciar Auditoria' },
};
