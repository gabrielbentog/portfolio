"use client";
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => 
    typeof window !== 'undefined' && window.localStorage.getItem('dark-mode') === 'true'
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      window.localStorage.setItem('dark-mode', newMode.toString());
      return newMode;
    });
  };

  return (
    <header className="bg-gray-100 sticky top-0 z-50 w-full">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <a href="#" className="flex items-center gap-2">
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
            className="h-6 w-6 text-black"
          >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
          </svg>
          <span className="text-xl font-semibold text-black">Gabriel Bento</span>
        </a>
        <button
          className="md:hidden flex items-center text-black"
          onClick={toggleMenu}
        >
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
            className="h-6 w-6"
          >
            <path d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        <button
          className="ml-4 p-2 text-black"
          onClick={toggleDarkMode}
        >
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
        <nav className={`hidden md:flex gap-6 text-sm font-medium text-gray-400 hover:text-gray-600`}>
          <a href="#biography" className="hover:text-gray-600">Ínicio</a>
          <a href="#knowledge" className="hover:text-gray-600">Conhecimentos</a>
          <a href="#projects" className="hover:text-gray-600">Projetos</a>
          <a href="#career" className="hover:text-gray-600">Carreira</a>
          <a href="#contacts" className="hover:text-gray-600">Contatos</a>
        </nav>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-black p-4`}>
        <nav className="flex flex-col gap-4 text-sm font-medium text-gray-400">
          <a href="#biography" className="hover:text-gray-600">Ínicio</a>
          <a href="#knowledge" className="hover:text-gray-600">Conhecimentos</a>
          <a href="#projects" className="hover:text-gray-600">Projetos</a>
          <a href="#career" className="hover:text-gray-600">carreira</a>
          <a href="#contacts" className="hover:text-gray-600">Contantos</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
