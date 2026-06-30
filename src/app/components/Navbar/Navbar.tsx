"use client";
import React, { useState, useEffect } from 'react';
import { FaRegMoon, FaSun } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';

const navItems = [
  { id: '#biography', key: 'start' as const },
  { id: '#knowledge', key: 'knowledge' as const },
  { id: '#projects', key: 'projects' as const },
  { id: '#career', key: 'career' as const },
  { id: '#contacts', key: 'contacts' as const },
];

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

  const linkClass =
    'font-mono text-xs uppercase tracking-wider text-ink-muted hover:text-ink dark:hover:text-paper transition-colors';

  return (
    <header className="sticky top-0 z-50 w-full border-b border-paper-border dark:border-ink-border bg-paper/90 dark:bg-ink/90 backdrop-blur supports-[backdrop-filter]:bg-paper/75 dark:supports-[backdrop-filter]:bg-ink/75">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <a href="#" className="flex items-center gap-3 shrink-0">
          <span className="font-display text-lg font-semibold tracking-tight text-ink dark:text-paper">
            Gabriel Bento
          </span>
          <span className="hidden sm:flex items-center gap-1.5 rounded-full border border-paper-border dark:border-ink-border px-2 py-0.5">
            <span className="status-dot h-1.5 w-1.5 rounded-full bg-ok" />
            <span className="font-mono text-[10px] uppercase tracking-wider text-ink-muted">
              {t.bio.panel.statusValue}
            </span>
          </span>
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex items-center text-ink dark:text-paper"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
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
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a key={item.id} href={item.id} className={linkClass}>
              {t.nav[item.key]}
            </a>
          ))}
          <span className="h-4 w-px bg-paper-border dark:bg-ink-border" />
          <button
            onClick={toggleLang}
            className="font-mono text-xs border border-paper-border dark:border-ink-border rounded px-2 py-1 text-ink-muted hover:text-ink dark:hover:text-paper hover:border-ink/40 dark:hover:border-paper/40 transition-colors"
            aria-label="Toggle language"
          >
            {lang === 'pt' ? 'EN' : 'PT'}
          </button>
          <button
            className="flex items-center text-ink dark:text-paper"
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <FaSun size={18} /> : <FaRegMoon size={18} />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} border-t border-paper-border dark:border-ink-border bg-paper dark:bg-ink px-4 py-4`}>
        <nav className="flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.id}
              className={linkClass}
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav[item.key]}
            </a>
          ))}
          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={toggleLang}
              className="font-mono text-xs border border-paper-border dark:border-ink-border rounded px-2 py-1 text-ink-muted hover:text-ink dark:hover:text-paper transition-colors"
            >
              {lang === 'pt' ? 'EN' : 'PT'}
            </button>
            <button
              className="flex items-center text-ink dark:text-paper"
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <FaSun size={18} /> : <FaRegMoon size={18} />}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
