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
      contacts: 'Contatos',
    },
    bio: {
      typingStrings: ['Olá, eu sou Gabriel Bento', 'Desenvolvedor Backend', 'Criador de soluções!'],
      description:
        'Me chamo Gabriel Bento, sou um desenvolvedor backend com foco em construir sistemas robustos, limpos e fáceis de evoluir. Tenho experiência sólida com Ruby on Rails, integrações externas complexas (Vimeo, Google Drive, ERPs), automações com Python e pipelines de dados distribuídos. Embora meu foco principal seja o backend, também tenho habilidades em front-end — o que me permite ter uma visão completa do desenvolvimento e entregar soluções que realmente funcionam.',
      webDev: 'Desenvolvimento Web',
      architecture: 'Arquitetura de Software',
      apis: 'Criação de APIs',
      deployment: 'Implantação e Escalabilidade',
    },
    knowledge: {
      title: 'Conhecimentos',
      subtitle: 'Tecnologias que possuo algum conhecimento.',
    },
    projects: {
      title: 'Meus Projetos',
      subtitle: 'Confira alguns dos meus projetos desenvolvidos com as melhores tecnologias.',
      privateCode: 'Código Privado',
      viewMore: 'Ver mais',
      accessProject: 'Acessar Projeto',
      viewOnGitHub: 'Ver no GitHub',
      items: [
        {
          title: 'Marketplace Completo — Backend Ruby on Rails',
          description:
            'Sistema de marketplace robusto com fluxo completo de usuários, produtos, compras, integração com gateways de pagamento e painel administrativo. Projetado para ser limpo, escalável e fácil de evoluir, com arquitetura consistente e performance otimizada.',
          imageUrl: '',
          link: '',
          gifUrl: '',
          githubUrl: '',
        },
        {
          title: 'IESB Saúde — Plataforma Acadêmica (TCC)',
          description:
            'Aplicação web para gerenciar atendimentos, agendamentos, prontuários e fluxo acadêmico do curso de saúde. Criada do zero para a faculdade com regras de negócio reais, foco em organização, clareza e segurança dos dados.',
          imageUrl: '',
          link: '',
          gifUrl: '',
          githubUrl: '',
        },
        {
          title: 'Sistema de Autenticação Completa: Solução Full Stack',
          description:
            'Sistema de autenticação completo que cobre todas as necessidades de segurança e usabilidade de uma aplicação moderna. Combina uma API robusta com interface de usuário intuitiva, utilizando boas práticas de segurança.',
          imageUrl: '/images/auth_project.png',
          link: '',
          gifUrl: '',
          githubUrl: '',
        },
        {
          title: 'Gerador de Senhas',
          description:
            'Aplicativo de gerador de senhas utilizando Tkinter em Python. Permite criar senhas seguras personalizando critérios de complexidade, como comprimento e tipos de caracteres.',
          imageUrl: '/images/password_generator.png',
          link: '',
          gifUrl: '/gifs/password_generator.gif',
          githubUrl: 'https://github.com/gabrielbentog/password_geneartor',
        },
      ],
    },
    career: {
      title: 'Carreira',
      subtitle: 'Minha trajetória profissional.',
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
          ],
        },
      ],
    },
    contact: {
      title: 'Contatos',
      subtitle: 'Fique à vontade para me encontrar nos seguintes canais:',
      downloadCV: 'Download CV',
    },
    footer: {
      rights: 'Todos os direitos reservados.',
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
      typingStrings: ["Hi, I'm Gabriel Bento", 'Backend Developer', 'Problem Solver!'],
      description:
        "I'm a backend developer focused on building solid, clean, and maintainable systems. I have solid experience with Ruby on Rails, complex external integrations (Vimeo, Google Drive, ERPs), Python automation, and distributed data pipelines. While my main focus is backend, I also have frontend skills — giving me a complete view of software development to deliver solutions that truly work.",
      webDev: 'Web Development',
      architecture: 'Software Architecture',
      apis: 'API Creation',
      deployment: 'Deployment & Scalability',
    },
    knowledge: {
      title: 'Skills',
      subtitle: 'Technologies I have knowledge in.',
    },
    projects: {
      title: 'My Projects',
      subtitle: 'Check out some of my projects built with the best technologies.',
      privateCode: 'Private Code',
      viewMore: 'See more',
      accessProject: 'View Project',
      viewOnGitHub: 'View on GitHub',
      items: [
        {
          title: 'Full Marketplace — Ruby on Rails Backend',
          description:
            'Robust marketplace system with complete user flows, products, purchases, payment gateway integration, and admin panel. Designed to be clean, scalable, and easy to evolve, with consistent architecture and optimized performance.',
          imageUrl: '',
          link: '',
          gifUrl: '',
          githubUrl: '',
        },
        {
          title: 'IESB Saúde — Academic Platform (Thesis)',
          description:
            'Web application to manage appointments, scheduling, patient records, and academic flow for a health course. Built from scratch for the university with real business rules, focused on organization, clarity, and data security.',
          imageUrl: '',
          link: '',
          gifUrl: '',
          githubUrl: '',
        },
        {
          title: 'Complete Auth System: Full Stack Solution',
          description:
            'Complete authentication system covering all security and usability needs of a modern application. Combines a robust API with an intuitive user interface, using security best practices.',
          imageUrl: '/images/auth_project.png',
          link: '',
          gifUrl: '',
          githubUrl: '',
        },
        {
          title: 'Password Generator',
          description:
            'Password generator app using Tkinter in Python. Allows users to create secure passwords by customizing complexity criteria such as length and character types.',
          imageUrl: '/images/password_generator.png',
          link: '',
          gifUrl: '/gifs/password_generator.gif',
          githubUrl: 'https://github.com/gabrielbentog/password_geneartor',
        },
      ],
    },
    career: {
      title: 'Career',
      subtitle: 'My professional journey.',
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
          ],
        },
      ],
    },
    contact: {
      title: 'Contact',
      subtitle: 'Feel free to reach me through the following channels:',
      downloadCV: 'Download CV',
    },
    footer: {
      rights: 'All rights reserved.',
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
