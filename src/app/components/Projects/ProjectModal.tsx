/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useRef } from 'react';
import { createPortal } from 'react-dom';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';

const slugify = (title: string) =>
  title
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

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  role: string;
  description: string;
  stack: string[];
  imageUrl: string;
  link: string;
  githubUrl: string;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, title, role, description, stack, imageUrl, link, githubUrl }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const handleClickOutside = (event: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/70 backdrop-blur-sm"
      onClick={handleClickOutside}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-2xl rounded-lg border border-paper-border dark:border-ink-border bg-paper-surface dark:bg-ink-surface shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-paper dark:bg-ink text-ink-muted hover:text-ink dark:hover:text-paper text-xl leading-none"
        >
          &times;
        </button>
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full aspect-video object-cover rounded-t-lg border-b border-paper-border dark:border-ink-border"
          />
        ) : (
          <div className="aspect-video w-full flex flex-col justify-between gap-2 rounded-t-lg border-b border-paper-border dark:border-ink-border bg-ink px-6 py-5">
            <div className="flex items-center justify-between font-mono text-xs uppercase tracking-wider">
              <span className="text-amber">GET</span>
              <span className="text-ok">200 OK</span>
            </div>
            <span className="font-mono text-base text-paper/35 truncate">/{slugify(title)}</span>
          </div>
        )}
        <div className="p-6 flex flex-col gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-amber-dim dark:text-amber">
              {role}
            </span>
            <h2 className="font-display text-2xl font-semibold mt-1 text-ink dark:text-paper">{title}</h2>
          </div>
          <p className="text-ink-muted leading-relaxed">{description}</p>
          <div className="flex flex-wrap gap-1.5">
            {stack.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[11px] rounded border border-paper-border dark:border-ink-border px-2 py-0.5 text-ink-muted"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-5 flex-wrap pt-2 border-t border-paper-border dark:border-ink-border">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 pt-4 text-sm text-ink dark:text-paper hover:text-ink-muted dark:hover:text-paper/70"
              >
                <FaGithub size={18} />
                <span>{t.projects.viewOnGitHub}</span>
              </a>
            )}
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 pt-4 text-sm font-semibold text-amber-dim dark:text-amber hover:underline"
              >
                {t.projects.accessProject}
                <FaExternalLinkAlt size={12} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ProjectModal;
