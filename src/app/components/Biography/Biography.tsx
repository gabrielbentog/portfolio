"use client";
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Biography: React.FC<{ id: string }> = ({ id }) => {
  const typedElement = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typedElement.current) {
      const options = {
        strings: ['Olá, eu sou Gabriel Bento', 'Desenvolvedor Backend', 'Criador de soluções!'],
        typeSpeed: 50,
        backSpeed: 30,
        cursorChar: '|',
        loop: true,
        // onComplete: (self: Typed) => {
        //   const cursor = self.cursor;
        //   if (cursor) {
        //     cursor.classList.add('hidden-cursor');
        //   }
        // }
      };
      const typed = new Typed(typedElement.current, options);
      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <section id={id} className="flex flex-col min-h-[100dvh] bg-light-gray-gradient text-foreground">
      <main className="container mx-auto px-4 py-4 md:py-12 flex flex-col items-center justify-center flex-1">
        <div className="max-w-2xl w-full space-y-8 text-center">
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold tracking-tighter relative gradient-text">
              <span className="inline-block whitespace-nowrap overflow-hidden pr-2">
                <span ref={typedElement}></span>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground opacity-80 transition-opacity duration-500 ease-in-out hover:opacity-100 text-justify">
              Me chamo Gabriel Bento, sou um desenvolvedor backend com uma paixão por construir soluções robustas e eficientes para desafios complexos. Tenho experiência em criar e otimizar sistemas escaláveis, garantindo que a arquitetura e a lógica de negócios sejam sólidas e confiáveis. Embora meu foco principal esteja no backend, também possuo habilidades em front-end, o que me permite ter uma visão completa do desenvolvimento de software e colaborar eficazmente em projetos integrados. Estou sempre em busca de aprender novas tecnologias e aprimorar minhas habilidades para entregar soluções de alta qualidade.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col items-center gap-2 transform transition-transform duration-500 hover:scale-110 hover:text-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8"
              >
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
              <span className="text-sm font-medium">Desenvolvimento Web</span>
            </div>
            <div className="flex flex-col items-center gap-2 transform transition-transform duration-500 hover:scale-110 hover:text-green-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8"
              >
                <rect width="16" height="16" x="4" y="4" rx="2"></rect>
                <rect width="6" height="6" x="9" y="9" rx="1"></rect>
                <path d="M15 2v2"></path>
                <path d="M15 20v2"></path>
                <path d="M2 15h2"></path>
                <path d="M2 9h2"></path>
                <path d="M20 15h2"></path>
                <path d="M20 9h2"></path>
                <path d="M9 2v2"></path>
                <path d="M9 20v2"></path>
              </svg>
              <span className="text-sm font-medium">Arquitetura de Software</span>
            </div>
            <div className="flex flex-col items-center gap-2 transform transition-transform duration-500 hover:scale-110 hover:text-purple-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8"
              >
                <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08"></path>
                <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z"></path>
              </svg>
              <span className="text-sm font-medium">Criação de APIs</span>
            </div>
            <div className="flex flex-col items-center gap-2 transform transition-transform duration-500 hover:scale-110 hover:text-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8"
              >
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
              </svg>
              <span className="text-sm font-medium">Implantação e Escalabilidade</span>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Biography;
