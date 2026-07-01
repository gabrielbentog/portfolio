"use client";
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-paper-border dark:border-ink-border bg-paper-surface dark:bg-ink-surface py-6">
      <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-4 text-center sm:flex-row sm:text-left md:px-6">
        <p className="font-mono text-xs text-ink-muted">
          &copy; {new Date().getFullYear()} Gabriel Bento. {t.footer.rights}
        </p>
        <p className="flex items-center gap-1.5 font-mono text-xs text-ink-muted">
          <span className="status-dot h-1.5 w-1.5 rounded-full bg-ok" />
          {t.footer.systemStatus}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
