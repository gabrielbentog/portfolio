"use client";
import ProjectCard from "./ProjectCard";

import { useLanguage } from '../../context/LanguageContext';

const ProjectsSection: React.FC<{ id: string }> = ({ id }) => {
  const { t } = useLanguage();

  return (
    <section id={id} className="w-full border-t border-paper-border dark:border-ink-border py-16 md:py-24 lg:py-28 bg-paper dark:bg-ink">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center space-y-2">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber-dim dark:text-amber">
            {t.projects.eyebrow}
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl text-ink dark:text-paper">
            {t.projects.title}
          </h2>
          <p className="text-lg text-ink-muted">
            {t.projects.subtitle}
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.projects.items.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              role={project.role}
              description={project.description}
              stack={project.stack}
              imageUrl={project.imageUrl}
              link={project.link}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
