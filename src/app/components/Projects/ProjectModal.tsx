/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useRef } from 'react';
import { createPortal } from 'react-dom';
import { FaGithub } from 'react-icons/fa';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  gifUrl: string;
  link: string;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, title, description, gifUrl, link }) => {
  const modalRef = useRef<HTMLDivElement>(null);

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
          className="absolute top-2 right-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
        >
          &times;
        </button>
        <img
          src={gifUrl}
          alt={`${title} GIF`}
          className="w-full h-72 object-cover rounded-t-lg"
        />
        <div className="p-6 flex flex-col justify-between h-full">
          <div>
            <h2 className="text-3xl font-bold mb-2">{title}</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg">{description}</p>
          </div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 absolute bottom-6 right-6"
          >
            <FaGithub size={24} />
            <span className="ml-2">Ver no GitHub</span>
          </a>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ProjectModal;
