"use client";
import React from 'react';
import { FaBriefcase } from 'react-icons/fa';

const CareerSection: React.FC<{ id: string }> = ({ id }) => {
  return (
    <section id={id} className="w-full py-12 md:py-24 lg:py-32 from-gray-100 via-gray-200 to-gray-300 dark:from-gray-800 dark:via-gray-900 dark:to-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Carreira
          </h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
            Explore minha trajetória profissional através de uma linha do tempo.
          </p>
        </div>
        <div className="relative mt-12 flex flex-col items-center">
          <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-[2px] bg-gray-500 dark:bg-gray-600"></div>
          <div className="relative space-y-12">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
                <FaBriefcase className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                  <h3 className="text-lg font-semibold mb-2">Estudologia</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">Desenvolvedor Backend, 2022 - Presente</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
