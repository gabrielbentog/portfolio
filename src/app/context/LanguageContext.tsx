"use client"

import { createContext, useContext, useState, type ReactNode } from 'react'

export type Language = 'pt' | 'en'

const translations = {
  pt: {
    nav: {
      start: 'Início',
      knowledge: 'Conhecimentos',
      projects: 'Projetos',
      career: 'Carreira',
      contacts: 'Contato',
    },
    bio: {
      eyebrow: 'GET /gabriel-bento',
      roleStrings: ['Desenvolvedor Backend', 'Ruby on Rails', 'Construtor de APIs'],
      description:
        'Sou desenvolvedor backend com foco em construir sistemas robustos, limpos e fáceis de evoluir. Tenho experiência sólida com Ruby on Rails, integrações externas complexas (Vimeo, Google Drive, ERPs), automações com Python e pipelines de dados distribuídos. Também tenho conhecimento em front-end, o que me dá visão completa do produto e entrega soluções que realmente funcionam.',
      panel: {
        roleLabel: 'cargo',
        roleValue: 'Dev Backend',
        locationLabel: 'local',
        locationValue: 'Brasília, BR',
        stackLabel: 'stack',
        stackValue: 'Rails · PostgreSQL · Redis',
        statusLabel: 'status',
        statusValue: 'Aberto a novas oportunidades',
      },
      ctaPrimary: 'Falar comigo',
      ctaSecondary: 'Ver projetos',
      scrollHint: 'scroll',
    },
    knowledge: {
      eyebrow: 'GET /skills',
      title: 'Conhecimentos',
      subtitle: 'Ferramentas que uso para construir e manter sistemas em produção.',
    },
    projects: {
      eyebrow: 'GET /projects',
      title: 'Projetos',
      subtitle: 'Uma seleção do que já construí — do backend ao deploy.',
      privateCode: 'Código privado',
      viewMore: 'Ver detalhes',
      accessProject: 'Acessar projeto',
      viewOnGitHub: 'Ver no GitHub',
      stackLabel: 'Stack',
      items: [
        {
          title: 'Marketplace completo',
          role: 'Backend · Ruby on Rails',
          description:
            'Sistema de marketplace robusto com fluxo completo de usuários, produtos, compras, integração com gateways de pagamento e painel administrativo. Arquitetura consistente e performance otimizada para escalar.',
          stack: ['Ruby on Rails', 'PostgreSQL', 'Pagamentos', 'Sidekiq'],
          imageUrl: '',
          link: '',
          githubUrl: '',
        },
        {
          title: 'IESB Saúde — Plataforma acadêmica',
          role: 'Full Stack · TCC',
          description:
            'Aplicação para gerenciar atendimentos, agendamentos, prontuários e fluxo acadêmico do curso de saúde. Construída do zero com regras de negócio reais, foco em organização, clareza e segurança dos dados.',
          stack: ['Ruby on Rails', 'PostgreSQL', 'Regras de negócio'],
          imageUrl: '',
          link: '',
          githubUrl: '',
        },
        {
          title: 'Sistema de autenticação completo',
          role: 'Full Stack · Segurança',
          description:
            'Autenticação completa cobrindo as necessidades de segurança e usabilidade de uma aplicação moderna: API robusta combinada a uma interface intuitiva, seguindo boas práticas de segurança.',
          stack: ['Ruby on Rails', 'JWT', 'React'],
          imageUrl: '/images/auth_project.png',
          link: '',
          githubUrl: '',
        },
      ],
    },
    career: {
      eyebrow: 'GET /career/log',
      title: 'Carreira',
      subtitle: 'Minha trajetória profissional.',
      logLabel: 'career.log',
      currentTag: 'atual',
      items: [
        {
          company: 'Estudologia',
          role: 'Desenvolvedor Ruby on Rails',
          period: 'Ago 2022 — Presente',
          description:
            'Entrei como estagiário e fui efetivado após demonstrar resultados consistentes. Desenvolvo e mantenho APIs RESTful em Ruby on Rails para uma plataforma educacional, com foco em integrações externas, automações e qualidade de código.',
          achievements: [
            'Desenvolvi e mantive APIs completas em Ruby on Rails com testes automatizados via RSpec',
            'Criei scripts Python para automação de relatórios e importações em larga escala via planilhas',
            'Implementei integrações com APIs de terceiros: Vimeo e Google Drive',
            'Fui responsável pelos deploys da aplicação em produção',
          ],
        },
      ],
    },
    contact: {
      eyebrow: 'POST /contato',
      title: 'Vamos conversar?',
      subtitle: 'Aberto a novas oportunidades, projetos e boas conversas sobre backend.',
      statusLabel: 'status',
      statusValue: 'Aberto a novas oportunidades',
      primaryCta: 'Enviar e-mail',
      downloadCV: 'Baixar currículo',
    },
    footer: {
      rights: 'Todos os direitos reservados.',
      systemStatus: 'sistema operacional',
    },
  },
  en: {
    nav: {
      start: 'Home',
      knowledge: 'Skills',
      projects: 'Projects',
      career: 'Career',
      contacts: 'Contact',
    },
    bio: {
      eyebrow: 'GET /gabriel-bento',
      roleStrings: ['Backend Developer', 'Ruby on Rails', 'API Builder'],
      description:
        "I'm a backend developer focused on building solid, clean, and maintainable systems. I have solid experience with Ruby on Rails, complex external integrations (Vimeo, Google Drive, ERPs), Python automation, and distributed data pipelines. I also have frontend skills, giving me a complete view of the product and helping me ship solutions that actually work.",
      panel: {
        roleLabel: 'role',
        roleValue: 'Backend Dev',
        locationLabel: 'location',
        locationValue: 'Brasília, BR',
        stackLabel: 'stack',
        stackValue: 'Rails · PostgreSQL · Redis',
        statusLabel: 'status',
        statusValue: 'Open to new opportunities',
      },
      ctaPrimary: 'Get in touch',
      ctaSecondary: 'See projects',
      scrollHint: 'scroll',
    },
    knowledge: {
      eyebrow: 'GET /skills',
      title: 'Skills',
      subtitle: 'Tools I use to build and run systems in production.',
    },
    projects: {
      eyebrow: 'GET /projects',
      title: 'Projects',
      subtitle: "A selection of what I've built — from backend to deploy.",
      privateCode: 'Private code',
      viewMore: 'View details',
      accessProject: 'View project',
      viewOnGitHub: 'View on GitHub',
      stackLabel: 'Stack',
      items: [
        {
          title: 'Full marketplace platform',
          role: 'Backend · Ruby on Rails',
          description:
            'Robust marketplace system with complete user flows, products, purchases, payment gateway integration, and an admin panel. Consistent architecture and optimized performance built to scale.',
          stack: ['Ruby on Rails', 'PostgreSQL', 'Payments', 'Sidekiq'],
          imageUrl: '',
          link: '',
          githubUrl: '',
        },
        {
          title: 'IESB Saúde — Academic platform',
          role: 'Full Stack · Thesis',
          description:
            'Application to manage appointments, scheduling, and patient records for a health course. Built from scratch with real business rules, focused on organization, clarity, and data security.',
          stack: ['Ruby on Rails', 'PostgreSQL', 'Business rules'],
          imageUrl: '',
          link: '',
          githubUrl: '',
        },
        {
          title: 'Complete authentication system',
          role: 'Full Stack · Security',
          description:
            'Complete authentication system covering the security and usability needs of a modern application: a robust API paired with an intuitive interface, following security best practices.',
          stack: ['Ruby on Rails', 'JWT', 'React'],
          imageUrl: '/images/auth_project.png',
          link: '',
          githubUrl: '',
        },
      ],
    },
    career: {
      eyebrow: 'GET /career/log',
      title: 'Career',
      subtitle: 'My professional journey.',
      logLabel: 'career.log',
      currentTag: 'current',
      items: [
        {
          company: 'Estudologia',
          role: 'Ruby on Rails Developer',
          period: 'Aug 2022 — Present',
          description:
            'Joined as an intern and was hired full-time after delivering consistent results. I develop and maintain RESTful APIs in Ruby on Rails for an educational platform, focused on external integrations, automations, and code quality.',
          achievements: [
            'Built and maintained complete APIs in Ruby on Rails with automated tests via RSpec',
            'Created Python scripts for report automation and large-scale data imports via spreadsheets',
            'Implemented third-party API integrations: Vimeo and Google Drive',
            'Responsible for deploying the application to production',
          ],
        },
      ],
    },
    contact: {
      eyebrow: 'POST /contact',
      title: "Let's talk",
      subtitle: 'Open to new opportunities, projects, and good conversations about backend.',
      statusLabel: 'status',
      statusValue: 'Open to new opportunities',
      primaryCta: 'Send an email',
      downloadCV: 'Download résumé',
    },
    footer: {
      rights: 'All rights reserved.',
      systemStatus: 'system operational',
    },
  },
}

type Translations = typeof translations.pt

type LanguageContextType = {
  lang: Language
  t: Translations
  toggleLang: () => void
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'pt',
  t: translations.pt,
  toggleLang: () => {},
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('pt')
  return (
    <LanguageContext.Provider
      value={{
        lang,
        t: translations[lang],
        toggleLang: () => setLang((l) => (l === 'pt' ? 'en' : 'pt')),
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
