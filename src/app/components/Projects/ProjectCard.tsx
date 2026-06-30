/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from 'react';
import ProjectModal from './ProjectModal';
import { FaGithub, FaExternalLinkAlt, FaLock } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  gifUrl: string;
  githubUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, link, gifUrl, githubUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useLanguage();

  const isPrivate = !githubUrl && !link;
  const hasGif = !!gifUrl;
  const showGif = isHovered && hasGif;

  const noOpenModal = (event: React.MouseEvent) => event.stopPropagation();

  return (
    <>
      <div
        className="group relative overflow-hidden rounded-lg bg-white dark:bg-gray-800 shadow-sm transition-all hover:shadow-md cursor-pointer border border-gray-200 dark:border-gray-700"
        onClick={() => setIsModalOpen(true)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {imageUrl ? (
          <img
            src={showGif ? gifUrl : imageUrl}
            alt={title}
            className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="aspect-video w-full bg-gradient-to-br from-blue-950 via-gray-900 to-purple-950 flex items-center justify-center">
            <span className="text-5xl font-mono font-bold text-blue-500/20 select-none">{'</>'}</span>
          </div>
        )}

        <div className="absolute inset-0 flex flex-col items-start justify-end p-4 transition-all bg-gradient-to-t from-black/70 via-black/20 to-transparent">
          <h3 className="text-lg font-semibold text-white leading-tight mb-1">{title}</h3>
          <p className="text-sm text-gray-300 line-clamp-2 mb-2">{description}</p>
          <div className="flex items-center gap-3 self-end">
            {isPrivate && (
              <div
                className="flex items-center gap-1.5 text-xs text-gray-300 border border-gray-500 rounded px-2 py-1"
                onClick={noOpenModal}
              >
                <FaLock size={10} />
                {t.projects.privateCode}
              </div>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-2 text-gray-300 bg-transparent border border-gray-400 rounded-md transition-all hover:bg-gray-800 hover:text-white"
                onClick={noOpenModal}
              >
                <FaGithub size={20} />
              </a>
            )}
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-teal-500 to-cyan-500 rounded-md shadow-md"
                onClick={noOpenModal}
              >
                {t.projects.accessProject}
              </a>
            )}
            <button
              onClick={(e) => { e.stopPropagation(); setIsModalOpen(true); }}
              className="inline-block px-4 py-2 text-sm font-medium text-white bg-transparent border border-white/50 rounded-md transition-all hover:bg-white/10"
            >
              {t.projects.viewMore}
            </button>
          </div>
        </div>
      </div>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        description={description}
        gifUrl={gifUrl}
        link={link}
        githubUrl={githubUrl}
      />
    </>
  );
};

export default ProjectCard;
