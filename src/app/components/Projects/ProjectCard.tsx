/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from 'react';
import ProjectModal from './ProjectModal';
import { FaGithub } from 'react-icons/fa';

const ProjectCard: React.FC<{ title: string; description: string; imageUrl: string; link: string; gifUrl: string }> = ({ title, description, imageUrl, link, gifUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Função para impedir a propagação do clique
  const handleGithubIconClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <>
      <div
        className="group relative overflow-hidden rounded-lg bg-background shadow-sm transition-all hover:shadow-md cursor-pointer"
        onClick={openModal}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={isHovered ? gifUrl : imageUrl}
          alt={title}
          className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex flex-col items-start justify-end p-4 transition-all bg-gradient-to-t from-black/50 to-transparent">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="text-sm text-gray-300 line-clamp-2">{description}</p>
          <div className="mt-2 flex items-center space-x-4 self-end">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center p-2 text-gray-300 bg-transparent border border-gray-300 rounded-md transition-all hover:bg-gray-800 hover:text-white"
              onClick={handleGithubIconClick} // Adicione o manipulador de clique aqui
            >
              <FaGithub size={24} />
            </a>
            <button
              onClick={openModal}
              className="inline-block px-4 py-2 text-sm font-medium text-primary bg-transparent border border-primary rounded-md transition-all hover:bg-primary hover:text-background"
            >
              Ver mais
            </button>
          </div>
        </div>
      </div>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={title}
        description={description}
        gifUrl={gifUrl}
        link={link}
      />
    </>
  );
};

export default ProjectCard;
