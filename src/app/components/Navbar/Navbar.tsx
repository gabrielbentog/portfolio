"use client";
import React, { useState, useEffect } from 'react';
import { FaRegMoon, FaSun } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const { lang, t, toggleLang } = useLanguage();

  useEffect(() => {
    const stored = localStorage.getItem('dark-mode');
    const dark = stored === null ? true : stored === 'true';
    setIsDarkMode(dark);
    document.documentElement.classList.toggle('dark', dark);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const next = !prev;
      localStorage.setItem('dark-mode', String(next));
      document.documentElement.classList.toggle('dark', next);
      return next;
    });
  };

  const linkClass = "hover:text-gray-900 dark:hover:text-gray-100 transition-colors";

  return (
    <header className="bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 w-full">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-4">
          <button
            className="flex items-center text-black dark:text-white"
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <FaSun size={22} /> : <FaRegMoon size={22} />}
          </button>
          <a href="#" className="flex items-center gap-2">
            <span className="text-xl font-semibold text-black dark:text-white">Gabriel Bento</span>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex items-center text-black dark:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
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

        {/* Desktop nav */}
        <nav className="md-flex gap-6 text-sm font-medium text-gray-500 dark:text-gray-400">
          <a href="#biography" className={linkClass}>{t.nav.start}</a>
          <a href="#knowledge" className={linkClass}>{t.nav.knowledge}</a>
          <a href="#projects" className={linkClass}>{t.nav.projects}</a>
          <a href="#career" className={linkClass}>{t.nav.career}</a>
          <a href="#contacts" className={linkClass}>{t.nav.contacts}</a>
          <button
            onClick={toggleLang}
            className="text-xs font-mono border border-gray-400 dark:border-gray-600 rounded px-2 py-0.5 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            {lang === 'pt' ? 'EN' : 'PT'}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-gray-900 p-4`}>
        <nav className="flex flex-col gap-4 text-sm font-medium text-gray-400">
          <a href="#biography" className="hover:text-gray-200" onClick={() => setIsMenuOpen(false)}>{t.nav.start}</a>
          <a href="#knowledge" className="hover:text-gray-200" onClick={() => setIsMenuOpen(false)}>{t.nav.knowledge}</a>
          <a href="#projects" className="hover:text-gray-200" onClick={() => setIsMenuOpen(false)}>{t.nav.projects}</a>
          <a href="#career" className="hover:text-gray-200" onClick={() => setIsMenuOpen(false)}>{t.nav.career}</a>
          <a href="#contacts" className="hover:text-gray-200" onClick={() => setIsMenuOpen(false)}>{t.nav.contacts}</a>
          <button
            onClick={toggleLang}
            className="self-start text-xs font-mono border border-gray-600 rounded px-2 py-0.5 hover:text-gray-200 transition-colors"
          >
            {lang === 'pt' ? 'EN' : 'PT'}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
