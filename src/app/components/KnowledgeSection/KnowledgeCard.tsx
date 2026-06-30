import { FC, ReactNode } from 'react';

interface KnowledgeCardProps {
  icon: ReactNode;
  name: string;
  description: string;
  accent: string;
}

const KnowledgeCard: FC<KnowledgeCardProps> = ({ icon, name, description, accent }) => {
  return (
    <div className="rounded-lg border border-paper-border dark:border-ink-border bg-paper-surface dark:bg-ink-surface p-5 flex flex-col gap-3 transition-colors hover:border-ink/25 dark:hover:border-paper/25">
      <span className="text-3xl leading-none" style={{ color: accent }} aria-hidden>
        {icon}
      </span>
      <span className="font-display font-semibold text-ink dark:text-paper">{name}</span>
      <p className="text-sm leading-relaxed text-ink-muted">{description}</p>
    </div>
  );
};

export default KnowledgeCard;
