/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useRef, useState } from 'react';
import { content, links, type Content, type Language, type Project } from '../content';

const LETTER_RADIUS = 260;
const LETTER_FORCE = 70;
const CELL_COUNT = 192;
const INITIAL_CELLS = [29, 30, 31, 53, 56, 77, 80, 101, 102, 103, 125, 149, 173];

function Clock() {
  const [time, setTime] = useState('');
  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString('pt-BR', { timeZone: 'America/Sao_Paulo' }));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return <>{time}</>;
}

// Crosshair lines follow the cursor via direct style writes, so moving the
// mouse never re-renders the page.
function Crosshair() {
  const h = useRef<HTMLDivElement>(null);
  const v = useRef<HTMLDivElement>(null);
  const label = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    const onMove = (e: MouseEvent) => {
      const x = e.clientX, y = e.clientY;
      if (!h.current || !v.current || !label.current) return;
      h.current.style.transform = `translateY(${y}px)`;
      v.current.style.transform = `translateX(${x}px)`;
      const lx = x > window.innerWidth - 140 ? x - 120 : x + 10;
      label.current.style.transform = `translate(${lx}px, ${y + 10}px)`;
      label.current.textContent = `x ${x} · y ${y}`;
      [h.current, v.current, label.current].forEach((el) => { el.style.display = "block"; });
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <>
      <div ref={h} className="xh xh-h" />
      <div ref={v} className="xh xh-v" />
      <div ref={label} className="xh-label" />
    </>
  );
}

function Title({ words }: { words: string[] }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const onMove = (e: MouseEvent) => {
      const root = ref.current;
      if (!root) return;
      root.querySelectorAll<HTMLElement>('[data-ch]').forEach((el) => {
        const parent = el.offsetParent;
        if (!parent) return;
        const p = parent.getBoundingClientRect();
        const dx = p.left + el.offsetLeft + el.offsetWidth / 2 - e.clientX;
        const dy = p.top + el.offsetTop + el.offsetHeight / 2 - e.clientY;
        const d = Math.hypot(dx, dy);
        if (d < LETTER_RADIUS) {
          const k = (1 - d / LETTER_RADIUS) ** 2, u = d || 1;
          el.style.transform = `translate(${(dx / u) * LETTER_FORCE * k}px, ${(dy / u) * LETTER_FORCE * k}px) rotate(${(dx / u) * 18 * k}deg)`;
        } else {
          el.style.transform = '';
        }
      });
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const letters = (word: string) =>
    Array.from(word).map((ch, i) => (
      <span key={i} data-ch className="ch">{ch}</span>
    ));

  return (
    <div ref={ref} aria-label={words.join(' ')}>
      <h1 className="hero-title" aria-hidden>{letters(words[0])}</h1>
      <h1 className="hero-title hero-title-2" aria-hidden>
        <span className="hero-accent">{letters(words[1])}</span>
        <span className="hero-muted">{letters(words[2])}</span>
      </h1>
    </div>
  );
}

const SLIDE_MS = 3500;

function Preview({ project, label }: { project: Project; label: string }) {
  const images = project.images ?? [];
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    setSlide(0);
    if (images.length < 2) return;
    const id = setInterval(() => setSlide((s) => (s + 1) % images.length), SLIDE_MS);
    return () => clearInterval(id);
  }, [project.n, images.length]);

  return (
    <div className={`preview-box${images.length ? ' has-img' : ''}`}>
      {images.map((src, i) => (
        <img key={src} src={src} alt={`${project.title} — ${i + 1}`} className={`preview-img${i === slide ? ' is-on' : ''}`} />
      ))}
      <div className="preview-label">{label}</div>
      {images.length > 1 && (
        <div className="preview-dots">
          {images.map((src, i) => (
            <button key={src} aria-label={`${i + 1}`} className={i === slide ? 'is-on' : ''} onClick={() => setSlide(i)} />
          ))}
        </div>
      )}
      <div className="preview-n">{project.n}</div>
    </div>
  );
}

function Work({ t }: { t: Content }) {
  const [active, setActive] = useState(0);
  const current = t.projects[active] ?? t.projects[0];

  return (
    <section id="trabalho" className="work">
      <div className="work-list">
        <div className="work-row work-head">
          <span>{t.cols.n}</span><span>{t.cols.project}</span><span>{t.cols.stack}</span><span>{t.cols.year}</span>
        </div>
        <div className="work-rows">
          {t.projects.map((p, i) => (
            <div
              key={p.n}
              className={`work-row work-item${i === active ? ' is-active' : ''}`}
              onMouseEnter={() => setActive(i)}
              onClick={() => setActive(i)}
            >
              <span className="work-n">{p.n}</span>
              <span className="work-title">{p.title}</span>
              <span className="work-meta">{p.stack}</span>
              <span className="work-meta tnum">{p.year}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="work-preview">
        <Preview project={current} label={t.preview} />
        <div className="preview-text">
          <div className="preview-client">{current.client}</div>
          <p>{current.desc}</p>
        </div>
      </div>
    </section>
  );
}

function Lab({ t }: { t: Content }) {
  const [cells, setCells] = useState(() => Array.from({ length: CELL_COUNT }, (_, i) => INITIAL_CELLS.includes(i)));
  const paint = useRef<boolean | null>(null);

  const setCell = (i: number, v: boolean) =>
    setCells((c) => (c[i] === v ? c : c.map((on, j) => (j === i ? v : on))));
  const stop = () => { paint.current = null; };

  return (
    <section id="lab" className="lab">
      <div className="lab-copy">
        <div className="kicker">{t.lab.kicker}</div>
        <h2 className="lab-title">{t.lab.title}</h2>
        <p className="lab-body">{t.lab.body}</p>
        <div className="lab-actions">
          <button className="btn btn-primary" onClick={() => setCells((c) => c.map(() => Math.random() < 0.22))}>{t.lab.random}</button>
          <button className="btn btn-secondary" onClick={() => setCells((c) => c.map(() => false))}>{t.lab.clear}</button>
        </div>
        <div className="lab-count tnum">{cells.filter(Boolean).length} / {CELL_COUNT} {t.lab.lit}</div>
      </div>
      <div className="lab-grid" onMouseLeave={stop} onMouseUp={stop}>
        {cells.map((on, i) => (
          <div
            key={i}
            className={`cell${on ? ' is-on' : ''}`}
            onMouseDown={() => { paint.current = !on; setCell(i, !on); }}
            onMouseEnter={() => { if (paint.current !== null) setCell(i, paint.current); }}
          />
        ))}
      </div>
    </section>
  );
}

export default function Portfolio() {
  const [lang, setLang] = useState<Language>('pt');
  const t = content[lang];
  const [user, domain] = links.email.split('@');

  return (
    <div className="page">
      <div className="bg-grid" aria-hidden>
        {Array.from({ length: 12 }, (_, i) => <div key={i} />)}
      </div>
      <Crosshair />

      <header className="site-header">
        <div className="brand"><span className="glow-dot" />Gabriel Bento</div>
        <div className="hide-sm">{t.role}</div>
        <div className="tnum hide-sm">{t.city} — <Clock /></div>
        <nav className="site-nav">
          <a href="#trabalho">{t.nav.work}</a>
          <a href="#lab">{t.nav.lab}</a>
          <a href="#contato" className="nav-accent">{t.nav.contact}</a>
          <button className="lang" onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')} aria-label="Toggle language">
            {lang === 'pt' ? 'EN' : 'PT'}
          </button>
        </nav>
      </header>
      <div className="fade-rule" />

      <section className="hero">
        <div className="g12 hero-meta">
          <div className="span-3">{t.index[0]}<br />{t.index[1]}</div>
          <div className="hero-available"><span className="tag tag-accent">{t.available}</span><span>{t.availableNote}</span></div>
        </div>
        <Title words={t.title} />
        <div className="hero-hint"><span className="hint-bar" />{t.hint}</div>
        <div className="g12 hero-foot">
          <p className="hero-intro">{t.intro}</p>
          <div className="stats">
            {t.stats.map((s) => (
              <div key={s.label} className="stat">
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Work t={t} />
      <div className="fade-rule" />
      <Lab t={t} />

      <section className="facts">
        {t.facts.map((f) => (
          <div key={f.label}>
            <div className="facts-label">{f.label}</div>
            <div className="facts-items">
              {f.items.map((item) => <div key={item}>{item}</div>)}
            </div>
          </div>
        ))}
      </section>

      <section id="contato" className="contact">
        <div className="g12 contact-meta">
          <div className="span-6">{t.contact.kicker}</div>
          <div className="contact-reply">{t.contact.reply}</div>
        </div>
        <a href={`mailto:${links.email}`} className="contact-email">{user}@<br />{domain}</a>
        <div className="fade-rule fade-rule-flush" />
        <div className="contact-links">
          <a href={links.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          <span className="copy">© {new Date().getFullYear()}</span>
        </div>
      </section>
    </div>
  );
}
