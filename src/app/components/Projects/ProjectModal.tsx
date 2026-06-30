/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useRef } from 'react';
import { createPortal } from 'react-dom';
import { FaGithub } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  gifUrl: string;
  link: string;
  githubUrl: string;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, title, description, gifUrl, link, githubUrl }) => {
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
      onClick={handleClickOutside}
    >
      <div
        ref={modalRef}
        className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-3xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 text-xl leading-none"
        >
          &times;
        </button>
        {gifUrl && (
          <img
            src={gifUrl}
            alt={`${title} GIF`}
            className="w-full h-full object-contain rounded-t-lg"
          />
        )}
        <div className="p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">{title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-base leading-relaxed">{description}</p>
          </div>
          <div className="flex gap-4 flex-wrap">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
              >
                <FaGithub size={20} />
                <span>{t.projects.viewOnGitHub}</span>
              </a>
            )}
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-teal-600 dark:text-teal-400 hover:underline"
              >
                {t.projects.accessProject}
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
