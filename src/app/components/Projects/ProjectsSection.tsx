"use client";
import ProjectCard from "./ProjectCard";

import { useLanguage } from '../../context/LanguageContext';

const ProjectsSection: React.FC<{ id: string }> = ({ id }) => {
  const { t } = useLanguage();

  return (
    <section id={id} className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-gray-100">
              {t.projects.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
              {t.projects.subtitle}
            </p>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {t.projects.items.map((project, index) => (
            <div
              key={index}
              className="relative transform transition duration-500 hover:scale-[1.02] hover:shadow-xl"
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                link={project.link}
                gifUrl={project.gifUrl}
                githubUrl={project.githubUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
