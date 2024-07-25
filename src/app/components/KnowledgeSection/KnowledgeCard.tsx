"use client";
import { FC, useState } from 'react';

interface KnowledgeCardProps {
  icon: JSX.Element;
  name: string;
  color: string;
  description: string;
}

const KnowledgeCard: FC<KnowledgeCardProps> = ({ icon, name, color, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-48 h-48 perspective-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative w-full h-full transform-style-preserve-3d transition-transform duration-500 ${isHovered ? 'rotate-y-180' : ''}`}
      >
        <div className={`absolute w-full h-full bg-white shadow-lg rounded-lg front face ${color}`}>
          <div className="flex flex-col items-center justify-center h-full gap-2">
            {icon}
            <span className="text-sm font-medium">{name}</span>
          </div>
        </div>
        <div className="absolute w-full h-full bg-white shadow-lg rounded-lg back face">
          <div className="flex items-center justify-center h-full p-4">
            <p className="text-sm text-gray-700 text-center">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeCard;
