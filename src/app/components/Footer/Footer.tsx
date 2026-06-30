"use client";
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-paper-border dark:border-ink-border bg-paper-surface dark:bg-ink py-6 text-center">
      <p className="font-mono text-xs text-ink-muted">
        &copy; {new Date().getFullYear()} Gabriel Bento. {t.footer.rights}
      </p>
    </footer>
  );
};

export default Footer;
