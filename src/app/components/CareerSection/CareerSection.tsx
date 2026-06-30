"use client";
import React from 'react';
import { FaBriefcase } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';

const CareerSection: React.FC<{ id: string }> = ({ id }) => {
  const { t } = useLanguage();

  return (
    <section id={id} className="w-full py-16 md:py-24 lg:py-28 bg-paper-surface dark:bg-ink">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center space-y-2">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl text-ink dark:text-paper">
            {t.career.title}
          </h2>
          <p className="text-lg text-ink-muted">
            {t.career.subtitle}
          </p>
        </div>

        <div className="relative mt-12 flex flex-col items-center">
          <div className="absolute inset-y-0 left-1/2 hidden sm:block w-px -translate-x-1/2 bg-paper-border dark:bg-ink-border" />

          <div className="relative w-full max-w-3xl space-y-10">
            {t.career.items.map((item, index) => (
              <div key={index} className="flex items-start gap-5 sm:gap-8">
                <div className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber text-ink">
                  <FaBriefcase className="h-4 w-4" />
                </div>
                <div className="flex-1 rounded-lg border border-paper-border dark:border-ink-border bg-paper dark:bg-ink-surface p-6">
                  <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-ink dark:text-paper">{item.role}</h3>
                      <p className="font-medium text-amber-dim dark:text-amber">{item.company}</p>
                    </div>
                    <span className="font-mono text-xs text-ink-muted shrink-0">{item.period}</span>
                  </div>
                  <p className="mb-4 text-sm leading-relaxed text-ink-muted">
                    {item.description}
                  </p>
                  <ul className="space-y-2">
                    {item.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-ink-muted">
                        <span className="mt-0.5 text-amber-dim dark:text-amber">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
