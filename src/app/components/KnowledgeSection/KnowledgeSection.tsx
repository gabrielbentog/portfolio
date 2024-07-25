import { FC } from 'react';
import { FaPython, FaReact, FaJava } from 'react-icons/fa';
import { VscRuby } from 'react-icons/vsc';
import { SiPostgresql, SiHeroku } from 'react-icons/si';
import KnowledgeCard from './KnowledgeCard';

const KnowledgeSection: FC = () => {
  const knowledges = [
    {
      name: "Ruby",
      icon: <VscRuby className="icon" style={{ '--i': 0 } as React.CSSProperties} />,
      color: "hover:text-red-500",
      description: "Tenho experiência em Ruby desenvolvendo aplicações web com Ruby on Rails."
    },
    {
      name: "Python",
      icon: <FaPython className="icon" style={{ '--i': 1 } as React.CSSProperties} />,
      color: "hover:text-green-500",
      description: "Uso Python para desenvolvimento de scripts, automação e ciência de dados."
    },
    {
      name: "Java",
      icon: <FaJava className="icon" style={{ '--i': 2 } as React.CSSProperties} />,
      color: "hover:text-orange-500",
      description: "Desenvolvo interfaces de usuário dinâmicas e responsivas com React."
    },
    {
      name: "React",
      icon: <FaReact className="icon" style={{ '--i': 2 } as React.CSSProperties} />,
      color: "hover:text-blue-500",
      description: "Desenvolvo interfaces de usuário dinâmicas e responsivas com React."
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql className="icon" style={{ '--i': 3 } as React.CSSProperties} />,
      color: "hover:text-blue-700",
      description: "Tenho sólida experiência em PostgreSQL para gerenciamento de bancos de dados relacionais."
    },
    {
      name: "Heroku",
      icon: <SiHeroku className="icon" style={{ '--i': 3 } as React.CSSProperties} />,
      color: "hover:text-purple-700",
      description: "Tenho experiência com Heroku para implantação e gerenciamento de aplicações na nuvem."
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Conhecimentos</h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Tecnologias que eu possuo algum conhecimento.
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-20">
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
      </div>
    </section>
  );
};

export default KnowledgeSection;
