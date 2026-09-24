export type Language = 'pt' | 'en';

export type Project = {
  n: string;
  title: string;
  stack: string;
  year: string;
  client: string;
  desc: string;
  images?: string[];
};

const EMAIL = 'bentogdev@gmail.com';

export const links = {
  email: EMAIL,
  github: 'https://github.com/gabrielbentog',
  linkedin: 'https://www.linkedin.com/in/gabriel-bento-21120a293/',
};

export const content = {
  pt: {
    role: 'Desenvolvedor backend',
    city: 'Brasília',
    nav: { work: 'Trabalho', lab: 'Lab', contact: 'Contato ↘' },
    index: ['Índice 001', 'Portfólio 2022—2026'],
    available: 'Disponível',
    availableNote: 'para novas oportunidades',
    title: ['Código', 'que', 'entrega.'],
    hint: 'Passe o mouse no título. As letras fogem do cursor — o resto do site é mais comportado.',
    intro:
      'Construo backends em Ruby on Rails que aguentam o tranco: APIs RESTful, integrações com serviços externos, automações em Python e deploys em produção.',
    stats: [
      { value: '4', label: 'anos de Rails' },
      { value: '3', label: 'integrações externas' },
      { value: 'RSpec', label: 'ou não sobe' },
    ],
    cols: { n: 'Nº', project: 'Projeto', stack: 'Stack', year: 'Ano' },
    preview: 'Prévia — imagem do projeto',
    projects: [
      { n: '01', title: 'Nodus', stack: 'Rails 8 · React', year: '2026', client: 'Projeto autoral — gerenciador de tarefas', desc: 'Gerenciador de tarefas multi-workspace: board, lista, calendário e timeline de épicos. API Rails com permissões por papel, login com Google/GitHub/Discord e atualização em tempo real via ActionCable.', images: ['/images/nodus/timeline.webp', '/images/nodus/workspace.webp', '/images/nodus/minhas-tarefas.webp'] },
      { n: '02', title: 'IESB Saúde', stack: 'Rails · PostgreSQL', year: '2025', client: 'TCC — IESB', desc: 'Plataforma para gerenciar atendimentos, agendamentos, prontuários e o fluxo acadêmico do curso de saúde. Regras de negócio reais, foco em segurança dos dados.' },
    ] as Project[],
    lab: {
      kicker: 'Lab / 002',
      title: 'Pinte a grade.',
      body: 'Clique e arraste sobre as células. Todo sistema que mantenho começou assim: uma estrutura rígida e alguém testando os limites dela.',
      random: 'Aleatório',
      clear: 'Limpar',
      lit: 'células acesas',
    },
    facts: [
      { label: 'Linguagens', items: ['Ruby', 'Python', 'TypeScript', 'SQL'] },
      { label: 'Ferramentas', items: ['Rails', 'PostgreSQL', 'Redis · Sidekiq', 'Docker'] },
      { label: 'Integrações', items: ['Vimeo', 'Google Drive', 'ERPs', 'Pagamentos'] },
      { label: 'Trajetória', items: ['Estudologia', 'Estagiário → Dev', 'Ciência da Computação', 'IESB'] },
    ],
    contact: { kicker: 'Contato / 003', reply: 'Resposta em até 48h' },
  },
  en: {
    role: 'Backend developer',
    city: 'Brasília',
    nav: { work: 'Work', lab: 'Lab', contact: 'Contact ↘' },
    index: ['Index 001', 'Portfolio 2022—2026'],
    available: 'Available',
    availableNote: 'for new opportunities',
    title: ['Code', 'that', 'ships.'],
    hint: 'Hover the title. The letters run from your cursor — the rest of the site behaves.',
    intro:
      'I build Ruby on Rails backends that hold up: RESTful APIs, third-party integrations, Python automations and production deploys.',
    stats: [
      { value: '4', label: 'years of Rails' },
      { value: '3', label: 'external integrations' },
      { value: 'RSpec', label: 'or it doesn’t ship' },
    ],
    cols: { n: 'No.', project: 'Project', stack: 'Stack', year: 'Year' },
    preview: 'Preview — project image',
    projects: [
      { n: '01', title: 'Nodus', stack: 'Rails 8 · React', year: '2026', client: 'Personal project — task manager', desc: 'Multi-workspace task manager: board, list, calendar and epic timeline. Rails API with role-based permissions, Google/GitHub/Discord sign-in and real-time updates over ActionCable.', images: ['/images/nodus/timeline.webp', '/images/nodus/workspace.webp', '/images/nodus/minhas-tarefas.webp'] },
      { n: '02', title: 'IESB Saúde', stack: 'Rails · PostgreSQL', year: '2025', client: 'Thesis — IESB', desc: 'Platform to manage appointments, scheduling, patient records and the academic flow of a health course. Real business rules, focused on data security.' },
    ] as Project[],
    lab: {
      kicker: 'Lab / 002',
      title: 'Paint the grid.',
      body: 'Click and drag across the cells. Every system I maintain started like this: a rigid structure and someone testing its limits.',
      random: 'Random',
      clear: 'Clear',
      lit: 'cells lit',
    },
    facts: [
      { label: 'Languages', items: ['Ruby', 'Python', 'TypeScript', 'SQL'] },
      { label: 'Tools', items: ['Rails', 'PostgreSQL', 'Redis · Sidekiq', 'Docker'] },
      { label: 'Integrations', items: ['Vimeo', 'Google Drive', 'ERPs', 'Payments'] },
      { label: 'Path', items: ['Estudologia', 'Intern → Dev', 'Computer Science', 'IESB'] },
    ],
    contact: { kicker: 'Contact / 003', reply: 'Reply within 48h' },
  },
};

export type Content = (typeof content)['pt'];
