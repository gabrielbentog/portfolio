"use client";
import { FC } from 'react';
import { FaPython, FaReact, FaDocker } from 'react-icons/fa';
import { VscRuby } from 'react-icons/vsc';
import { SiPostgresql, SiRedis } from 'react-icons/si';
import { BiLogoTypescript } from "react-icons/bi";
import { AiOutlineKubernetes } from "react-icons/ai";
import KnowledgeCard from './KnowledgeCard';
import { useLanguage } from '../../context/LanguageContext';

const KnowledgeSection: FC<{ id: string }> = ({ id }) => {
  const { lang, t } = useLanguage();
  const d = (pt: string, en: string) => lang === 'pt' ? pt : en;

  const knowledges = [
    {
      name: "Ruby on Rails",
      icon: <VscRuby className="icon" style={{ '--i': 0 } as React.CSSProperties} />,
      color: "hover:text-red-600",
      description: d(
        "Framework principal que uso no dia a dia para construir APIs RESTful robustas e escaláveis.",
        "Main framework I use daily to build robust and scalable RESTful APIs.",
      ),
    },
    {
      name: "Ruby",
      icon: <VscRuby className="icon" style={{ '--i': 1 } as React.CSSProperties} />,
      color: "hover:text-red-500",
      description: d(
        "Linguagem principal — tenho conhecimento aprofundado da linguagem e seu ecossistema.",
        "Primary language — deep knowledge of the language and its ecosystem.",
      ),
    },
    {
      name: "Python",
      icon: <FaPython className="icon" style={{ '--i': 2 } as React.CSSProperties} />,
      color: "hover:text-green-500",
      description: d(
        "Uso para scripts de automação, geração de relatórios e importações de dados em larga escala.",
        "Used for automation scripts, report generation, and large-scale data imports.",
      ),
    },
    {
      name: "TypeScript",
      icon: <BiLogoTypescript className="icon" style={{ '--i': 3 } as React.CSSProperties} />,
      color: "hover:text-blue-500",
      description: d(
        "Experiência com TypeScript para construir frontends tipados com React e Next.js.",
        "Experience with TypeScript for building typed frontends with React and Next.js.",
      ),
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql className="icon" style={{ '--i': 4 } as React.CSSProperties} />,
      color: "hover:text-blue-700",
      description: d(
        "Experiência sólida em gerenciamento de bancos de dados relacionais, otimização de queries e JSONB.",
        "Solid experience in relational database management, query optimization, and JSONB.",
      ),
    },
    {
      name: "Redis",
      icon: <SiRedis className="icon" style={{ '--i': 5 } as React.CSSProperties} />,
      color: "hover:text-red-600",
      description: d(
        "Uso para caching, filas de jobs com Sidekiq e gerenciamento de sessões.",
        "Used for caching, job queues with Sidekiq, and session management.",
      ),
    },
    {
      name: "React",
      icon: <FaReact className="icon" style={{ '--i': 6 } as React.CSSProperties} />,
      color: "hover:text-cyan-500",
      description: d(
        "Desenvolvo interfaces dinâmicas e responsivas. Este portfólio foi construído com Next.js + React.",
        "Build dynamic and responsive user interfaces. This portfolio was built with Next.js + React.",
      ),
    },
    {
      name: "Docker",
      icon: <FaDocker className="icon" style={{ '--i': 7 } as React.CSSProperties} />,
      color: "hover:text-blue-600",
      description: d(
        "Experiência em criar e gerenciar containers para ambientes de desenvolvimento e produção.",
        "Experience creating and managing containers for development and production environments.",
      ),
    },
    {
      name: "Kubernetes",
      icon: <AiOutlineKubernetes className="icon" style={{ '--i': 8 } as React.CSSProperties} />,
      color: "hover:text-blue-700",
      description: d(
        "Experiência básica na configuração de clusters e gerenciamento de deploys.",
        "Basic experience configuring clusters and managing deployments.",
      ),
    },
  ];

  return (
    <section id={id} className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-gray-100">
              {t.knowledge.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
              {t.knowledge.subtitle}
            </p>
          </div>
        </div>

        <div className="show-on-md mt-12 flex-wrap justify-center gap-20">
          {knowledges.map((knowledge, index) => (
            <KnowledgeCard
              key={index}
              icon={knowledge.icon}
              name={knowledge.name}
              color={knowledge.color}
              description={knowledge.description}
            />
          ))}
        </div>

        <div className="flex md:hidden mt-12 gap-4 overflow-x-auto pb-4">
          {knowledges.map((knowledge, index) => (
            <div key={index} className="min-w-max">
              <KnowledgeCard
                icon={knowledge.icon}
                name={knowledge.name}
                color={knowledge.color}
                description={knowledge.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KnowledgeSection;
