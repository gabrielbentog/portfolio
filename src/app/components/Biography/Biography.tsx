"use client";
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { useLanguage } from '../../context/LanguageContext';

const Biography: React.FC<{ id: string }> = ({ id }) => {
  const typedElement = useRef<HTMLSpanElement>(null);
  const { lang, t } = useLanguage();

  useEffect(() => {
    if (!typedElement.current) return;
    typedElement.current.innerHTML = '';
    const typed = new Typed(typedElement.current, {
      strings: t.bio.roleStrings,
      typeSpeed: 45,
      backSpeed: 25,
      backDelay: 1500,
      cursorChar: '_',
      loop: true,
    });
    return () => typed.destroy();
  }, [lang]);

  const panelRows: Array<[string, string]> = [
    [t.bio.panel.roleLabel, t.bio.panel.roleValue],
    [t.bio.panel.locationLabel, t.bio.panel.locationValue],
    [t.bio.panel.stackLabel, t.bio.panel.stackValue],
  ];

  return (
    <section id={id} className="flex flex-col min-h-[100dvh] bg-paper dark:bg-ink">
      <main className="container mx-auto px-4 md:px-6 py-16 md:py-24 flex-1 flex items-center">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center w-full">
          <div className="space-y-6 text-center lg:text-left">
            <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-amber-dim dark:text-amber">
              {t.bio.eyebrow}
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-ink dark:text-paper">
              Gabriel Bento
            </h1>
            <p className="font-mono text-lg md:text-xl text-ink-muted min-h-[1.75rem]">
              <span ref={typedElement}></span>
            </p>
            <p className="text-base md:text-lg leading-relaxed text-ink/80 dark:text-paper/80 max-w-xl mx-auto lg:mx-0">
              {t.bio.description}
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href="#contacts"
                className="inline-flex items-center justify-center rounded-md bg-amber px-5 py-2.5 text-sm font-semibold text-ink hover:bg-amber-dim transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
              >
                {t.bio.ctaPrimary}
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-md border border-paper-border dark:border-ink-border px-5 py-2.5 text-sm font-semibold text-ink dark:text-paper hover:border-ink/40 dark:hover:border-paper/40 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
              >
                {t.bio.ctaSecondary}
              </a>
            </div>
          </div>

          <div className="rounded-lg border border-paper-border dark:border-ink-border bg-paper-surface dark:bg-ink-surface shadow-sm font-mono text-sm overflow-hidden">
            <div className="flex items-center justify-between border-b border-paper-border dark:border-ink-border px-5 py-3">
              <span className="text-xs uppercase tracking-wider text-ink-muted">response</span>
              <span className="text-xs text-ok">200 OK</span>
            </div>
            <dl className="divide-y divide-paper-border dark:divide-ink-border">
              {panelRows.map(([label, value]) => (
                <div key={label} className="flex items-center justify-between gap-4 px-5 py-3">
                  <dt className="text-ink-muted">{label}</dt>
                  <dd className="text-ink dark:text-paper text-right">{value}</dd>
                </div>
              ))}
              <div className="flex items-center justify-between gap-4 px-5 py-3">
                <dt className="text-ink-muted">{t.bio.panel.statusLabel}</dt>
                <dd className="flex items-center gap-2 text-ink dark:text-paper text-right">
                  <span className="status-dot h-1.5 w-1.5 rounded-full bg-ok shrink-0" />
                  {t.bio.panel.statusValue}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </main>
      <div className="hidden justify-center pb-8 sm:flex">
        <a
          href="#knowledge"
          aria-label={t.bio.scrollHint}
          className="flex flex-col items-center gap-1 text-ink-muted/70 transition-colors hover:text-ink-muted"
        >
          <span className="font-mono text-[11px] uppercase tracking-[0.2em]">{t.bio.scrollHint}</span>
          <span className="animate-bounce text-xs">↓</span>
        </a>
      </div>
    </section>
  );
};

export default Biography;
