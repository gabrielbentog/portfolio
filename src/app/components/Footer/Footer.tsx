"use client";
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-gray-800 dark:bg-gray-950 text-gray-300 py-4 text-center border-t border-gray-700">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Gabriel Bento. {t.footer.rights}
      </p>
    </footer>
  );
};

export default Footer;
