"use client";
import React, { useState } from 'react';

const KnowledgeCard: React.FC<{ icon: JSX.Element; name: string; color: string; description: string }> = ({ icon, name, color, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-48 h-48 perspective-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative w-full h-full transform-style-preserve-3d transition-transform duration-500 ${
          isHovered ? 'rotate-y-180' : ''
        }`}
      >
        {/* Face da frente */}
        <div className={"absolute w-full h-full shadow-lg rounded-lg front face bg-white dark:bg-gray-800 text-white"}>
          <div className="flex flex-col items-center justify-center h-full gap-2">
            {icon}
            <span className={"text-sm font-medium text-black dark:text-white"}>
              {name}
            </span>
          </div>
        </div>
        {/* Face de trás */}
        <div className="absolute w-full h-full shadow-lg rounded-lg back face bg-white dark:bg-gray-800 text-white ">
          <div className="flex items-center justify-center h-full p-4">
            <p className="text-sm bg-white dark:bg-gray-800 text-black dark:text-white text-center">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeCard;
