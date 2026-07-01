/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from 'react';
import ProjectModal from './ProjectModal';
import { FaGithub, FaExternalLinkAlt, FaLock } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';

interface ProjectCardProps {
  title: string;
  role: string;
  description: string;
  stack: string[];
  imageUrl: string;
  link: string;
  githubUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, role, description, stack, imageUrl, link, githubUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useLanguage();

  const isPrivate = !githubUrl && !link;
  const stopPropagation = (event: React.MouseEvent) => event.stopPropagation();
  const slug = title
    .toLowerCase()
    .normalize('NFD')
    .split('')
    .filter((char) => {
      const code = char.charCodeAt(0);
      return code < 0x0300 || code > 0x036f;
    })
    .join('')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

  return (
    <>
      <div
        className="group flex h-full flex-col overflow-hidden rounded-lg border border-paper-border dark:border-ink-border bg-paper-surface dark:bg-ink-surface transition-colors hover:border-ink/30 dark:hover:border-paper/30 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="aspect-video w-full object-cover"
          />
        ) : (
          <div className="aspect-video w-full flex flex-col justify-between gap-2 border-b border-paper-border dark:border-ink-border bg-ink px-5 py-4">
            <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-wider">
              <span className="text-amber">GET</span>
              <span className="text-ok">200 OK</span>
            </div>
            <span className="font-mono text-sm text-paper/35 truncate">/{slug}</span>
          </div>
        )}

        <div className="flex flex-1 flex-col gap-3 p-5">
          <div className="flex items-center justify-between gap-2">
            <span className="font-mono text-xs uppercase tracking-wider text-amber-dim dark:text-amber">
              {role}
            </span>
            {isPrivate && (
              <span className="inline-flex items-center gap-1.5 text-xs text-ink-muted">
                <FaLock size={10} />
                {t.projects.privateCode}
              </span>
            )}
          </div>

          <h3 className="font-display text-lg font-semibold leading-snug text-ink dark:text-paper">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-ink-muted line-clamp-3">
            {description}
          </p>

          <div className="flex flex-wrap gap-1.5 pt-1">
            {stack.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[11px] rounded border border-paper-border dark:border-ink-border px-2 py-0.5 text-ink-muted"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-auto flex items-center gap-4 pt-4 border-t border-paper-border dark:border-ink-border">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-ink-muted hover:text-ink dark:hover:text-paper transition-colors"
                onClick={stopPropagation}
              >
                <FaGithub size={16} />
                GitHub
              </a>
            )}
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-dim dark:text-amber hover:underline"
                onClick={stopPropagation}
              >
                {t.projects.accessProject}
                <FaExternalLinkAlt size={11} />
              </a>
            )}
            <button
              onClick={(e) => { e.stopPropagation(); setIsModalOpen(true); }}
              className="ml-auto text-sm font-medium text-ink-muted hover:text-ink dark:hover:text-paper transition-colors"
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
        role={role}
        description={description}
        stack={stack}
        imageUrl={imageUrl}
        link={link}
        githubUrl={githubUrl}
      />
    </>
  );
};

export default ProjectCard;
