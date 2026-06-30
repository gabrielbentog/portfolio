"use client";
import React from 'react';
import { FaBriefcase } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';

const CareerSection: React.FC<{ id: string }> = ({ id }) => {
  const { t } = useLanguage();

  return (
    <section id={id} className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-gray-900 dark:text-gray-100">
            {t.career.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
            {t.career.subtitle}
          </p>
        </div>

        <div className="relative mt-12 flex flex-col items-center">
          <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-[2px] bg-gray-300 dark:bg-gray-700"></div>

          <div className="relative space-y-12 w-full max-w-3xl">
            {t.career.items.map((item, index) => (
              <div key={index} className="flex items-start gap-6 md:gap-8">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center text-white z-10">
                  <FaBriefcase className="w-4 h-4" />
                </div>
                <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-1">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">{item.role}</h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">{item.company}</p>
                    </div>
                    <span className="text-sm font-mono text-gray-500 dark:text-gray-400 shrink-0">{item.period}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <ul className="space-y-2">
                    {item.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="text-blue-500 mt-0.5">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
