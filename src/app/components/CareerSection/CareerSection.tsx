"use client";
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const isOngoing = (period: string) => /presente|present/i.test(period);

const CareerSection: React.FC<{ id: string }> = ({ id }) => {
  const { t } = useLanguage();

  return (
    <section id={id} className="w-full border-t border-paper-border dark:border-ink-border py-16 md:py-24 lg:py-28 bg-paper-surface dark:bg-ink">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center space-y-2">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber-dim dark:text-amber">
            {t.career.eyebrow}
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl text-ink dark:text-paper">
            {t.career.title}
          </h2>
          <p className="text-lg text-ink-muted">
            {t.career.subtitle}
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-lg border border-paper-border dark:border-ink-border bg-paper dark:bg-ink-surface font-mono text-sm">
          <div className="flex items-center justify-between border-b border-paper-border dark:border-ink-border px-5 py-3">
            <span className="text-xs uppercase tracking-wider text-ink-muted">{t.career.logLabel}</span>
            <span className="text-xs text-ok">tail -f</span>
          </div>

          <div className="divide-y divide-paper-border dark:divide-ink-border">
            {t.career.items.map((item, index) => (
              <div key={index} className="px-5 py-6 sm:px-6">
                <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="text-xs text-ink-muted">{item.period}</span>
                  {isOngoing(item.period) && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-paper-border dark:border-ink-border px-2 py-0.5">
                      <span className="status-dot h-1.5 w-1.5 rounded-full bg-ok" />
                      <span className="text-[10px] uppercase tracking-wider text-ink-muted">{t.career.currentTag}</span>
                    </span>
                  )}
                </div>
                <h3 className="font-display text-lg font-semibold text-ink dark:text-paper">{item.role}</h3>
                <p className="mb-3 font-medium text-amber-dim dark:text-amber">{item.company}</p>
                <p className="mb-4 text-sm leading-relaxed text-ink-muted">
                  {item.description}
                </p>
                <ul className="space-y-2">
                  {item.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-ink-muted">
                      <span className="mt-0.5 shrink-0 text-amber-dim dark:text-amber">$</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
