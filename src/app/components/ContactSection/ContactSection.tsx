"use client";
import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';

const ContactSection: React.FC<{ id: string }> = ({ id }) => {
  const { t } = useLanguage();

  return (
    <section id={id} className="w-full border-t border-ink-border bg-ink py-20 md:py-28">
      <div className="container mx-auto max-w-2xl px-4 text-center md:px-6">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber">
          {t.contact.eyebrow}
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl md:text-5xl">
          {t.contact.title}
        </h2>
        <p className="mx-auto mt-4 max-w-md text-lg text-paper/70">
          {t.contact.subtitle}
        </p>

        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-paper/15 px-4 py-1.5">
          <span className="status-dot h-1.5 w-1.5 rounded-full bg-ok" />
          <span className="font-mono text-xs text-paper/80">{t.contact.statusValue}</span>
        </div>

        <div className="mt-10 flex flex-col items-center gap-3">
          <Link
            href="mailto:bentogdev@gmail.com"
            className="inline-flex items-center gap-2 rounded-md bg-amber px-7 py-3.5 text-base font-semibold text-ink transition-colors hover:bg-amber-dim focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper"
          >
            <SiGmail className="h-5 w-5" />
            {t.contact.primaryCta}
          </Link>
          <span className="font-mono text-sm text-paper/50">bentogdev@gmail.com</span>
        </div>

        <div className="mt-12 flex items-center justify-center gap-8 border-t border-paper/10 pt-8">
          <Link
            href="https://github.com/gabrielbentog"
            className="flex flex-col items-center gap-2 text-paper/60 transition-colors hover:text-paper"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="h-6 w-6" />
            <span className="font-mono text-xs">GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/gabriel-bento-21120a293/"
            className="flex flex-col items-center gap-2 text-paper/60 transition-colors hover:text-paper"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="h-6 w-6" />
            <span className="font-mono text-xs">LinkedIn</span>
          </Link>
          <a
            href="/curriculo.pdf"
            download
            className="flex flex-col items-center gap-2 text-paper/60 transition-colors hover:text-paper"
          >
            <FaFileAlt className="h-6 w-6" />
            <span className="font-mono text-xs">{t.contact.downloadCV}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
