"use client";
import React from 'react';


const ProjectCard: React.FC<{ title: string; description: string; imageUrl: string; link: string }> = ({ title, description, imageUrl, link }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-background shadow-sm transition-all hover:shadow-md">
      <img
        src={imageUrl}
        alt={title}
        className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex flex-col items-start justify-end bg-gradient-to-t from-background/80 to-transparent p-4 transition-all group-hover:bg-gradient-to-b">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 self-end inline-block px-4 py-2 text-sm font-medium text-primary bg-transparent border border-primary rounded-md transition-all hover:bg-primary hover:text-background"
        >
          Ver mais
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;