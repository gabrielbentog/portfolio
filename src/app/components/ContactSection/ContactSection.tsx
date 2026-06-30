"use client";
import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';

const ContactSection: React.FC<{ id: string }> = ({ id }) => {
  const { t } = useLanguage();

  return (
    <section id={id} className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900">
      <div className="container max-w-4xl px-4 md:px-6 mx-auto">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-gray-100">
              {t.contact.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              {t.contact.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
            <div className="flex flex-col items-center gap-3">
              <Link
                href="mailto:bentogdev@gmail.com"
                className="text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGmail className="h-12 w-12" />
              </Link>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">bentogdev@gmail.com</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Link
                href="https://github.com/gabrielbentog"
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="h-12 w-12" />
              </Link>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">@gabrielbentog</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Link
                href="https://www.linkedin.com/in/gabriel-bento-21120a293/"
                className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="h-12 w-12" />
              </Link>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">Gabriel Bento</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <a
                href="/curriculo.pdf"
                download
                className="text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
              >
                <FaFileAlt className="h-12 w-12" />
              </a>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">{t.contact.downloadCV}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
