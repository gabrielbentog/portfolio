"use client";
import { FC } from 'react';
import { FaPython, FaReact, FaDocker } from 'react-icons/fa';
import { VscRuby } from 'react-icons/vsc';
import { SiPostgresql, SiRedis } from 'react-icons/si';
import { BiLogoTypescript } from "react-icons/bi";
import { AiOutlineKubernetes } from "react-icons/ai";
import KnowledgeCard from './KnowledgeCard';
import { useLanguage } from '../../context/LanguageContext';

type Category = 'core' | 'data' | 'frontend';

const KnowledgeSection: FC<{ id: string }> = ({ id }) => {
  const { lang, t } = useLanguage();
  const d = (pt: string, en: string) => lang === 'pt' ? pt : en;

  const categoryLabels: Record<Category, string> = {
    core: d('Núcleo', 'Core'),
    data: d('Dados & Infra', 'Data & Infra'),
    frontend: d('Front & Scripts', 'Frontend & Scripting'),
  };

  const knowledges: Array<{ name: string; icon: JSX.Element; accent: string; category: Category; description: string }> = [
    {
      name: "Ruby on Rails",
      icon: <VscRuby />,
      accent: "#CC342D",
      category: 'core',
      description: d(
        "Framework principal que uso no dia a dia para construir APIs RESTful robustas e escaláveis.",
        "Main framework I use daily to build robust and scalable RESTful APIs.",
      ),
    },
    {
      name: "Ruby",
      icon: <VscRuby />,
      accent: "#E0271F",
      category: 'core',
      description: d(
        "Linguagem principal — conhecimento aprofundado da linguagem e do seu ecossistema.",
        "Primary language — deep knowledge of the language and its ecosystem.",
      ),
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql />,
      accent: "#336791",
      category: 'data',
      description: d(
        "Experiência sólida em modelagem, otimização de queries e uso de JSONB em produção.",
        "Solid experience in schema design, query optimization, and JSONB in production.",
      ),
    },
    {
      name: "Redis",
      icon: <SiRedis />,
      accent: "#DC382D",
      category: 'data',
      description: d(
        "Uso para caching, filas de jobs com Sidekiq e gerenciamento de sessões.",
        "Used for caching, job queues with Sidekiq, and session management.",
      ),
    },
    {
      name: "Docker",
      icon: <FaDocker />,
      accent: "#2496ED",
      category: 'data',
      description: d(
        "Crio e gerencio containers para ambientes de desenvolvimento e produção.",
        "Create and manage containers for development and production environments.",
      ),
    },
    // {
    //   name: "Kubernetes",
    //   icon: <AiOutlineKubernetes />,
    //   accent: "#326CE5",
    //   category: 'data',
    //   description: d(
    //     "Experiência prática configurando clusters e gerenciando deploys.",
    //     "Hands-on experience configuring clusters and managing deployments.",
    //   ),
    // },
    {
      name: "Python",
      icon: <FaPython />,
      accent: "#3776AB",
      category: 'frontend',
      description: d(
        "Scripts de automação, geração de relatórios e importações de dados em larga escala.",
        "Automation scripts, report generation, and large-scale data imports.",
      ),
    },
    {
      name: "TypeScript",
      icon: <BiLogoTypescript />,
      accent: "#3178C6",
      category: 'frontend',
      description: d(
        "Frontends tipados com React e Next.js, mantendo consistência ponta a ponta.",
        "Typed frontends with React and Next.js, keeping consistency end to end.",
      ),
    },
    {
      name: "React",
      icon: <FaReact />,
      accent: "#61DAFB",
      category: 'frontend',
      description: d(
        "Interfaces dinâmicas e responsivas — este portfólio foi construído com Next.js + React.",
        "Dynamic, responsive interfaces — this portfolio was built with Next.js + React.",
      ),
    },
  ];

  const categories: Category[] = ['core', 'data', 'frontend'];

  return (
    <section id={id} className="w-full border-t border-paper-border dark:border-ink-border py-16 md:py-24 lg:py-28 bg-paper-surface dark:bg-ink">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center space-y-2">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber-dim dark:text-amber">
            {t.knowledge.eyebrow}
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl text-ink dark:text-paper">
            {t.knowledge.title}
          </h2>
          <p className="text-lg text-ink-muted">
            {t.knowledge.subtitle}
          </p>
        </div>

        <div className="mt-12 space-y-10">
          {categories.map((category) => (
            <div key={category}>
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted mb-4">
                {categoryLabels[category]}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {knowledges
                  .filter((k) => k.category === category)
                  .map((knowledge) => (
                    <KnowledgeCard
                      key={knowledge.name}
                      icon={knowledge.icon}
                      name={knowledge.name}
                      accent={knowledge.accent}
                      description={knowledge.description}
                    />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KnowledgeSection;
