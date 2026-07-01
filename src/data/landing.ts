export const navLinks = [
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'Funcionalidades', href: '#funcionalidades' },
  { label: 'Benefícios', href: '#beneficios' },
  { label: 'FAQ', href: '#faq' },
] as const

export const heroStats = [
  { value: '15–20%', label: 'da população tem dislexia' },
  { value: '10M+', label: 'brasileiros afetados' },
  { value: '100%', label: 'personalizado para você' },
] as const

export const challengeItems = [
  {
    title: 'Letras que parecem se mover',
    description:
      'A dislexia afeta a percepção visual do texto, causando transposição e inversão de letras e palavras durante a leitura.',
    icon: 'eye',
    tone: 'red',
  },
  {
    title: 'Dificuldade de decodificação',
    description:
      'O processo de converter símbolos escritos em sons e significados é muito mais exigente cognitivamente para pessoas com dislexia.',
    icon: 'brain',
    tone: 'amber',
  },
  {
    title: 'Impacto no desempenho escolar',
    description:
      'Sem suporte adequado, alunos com dislexia apresentam 3× mais risco de abandono escolar e frustração acadêmica.',
    icon: 'chart-line',
    tone: 'blue',
  },
  {
    title: 'Baixa autoestima e ansiedade',
    description:
      'A frustração constante com a leitura gera impactos emocionais profundos — ansiedade, vergonha e isolamento social.',
    icon: 'check',
    tone: 'pink',
  },
] as const

export const steps = [
  {
    number: '01',
    title: 'Capture o Texto',
    description: 'Fotografe materiais físicos ou importe PDFs, imagens e documentos digitais.',
    icon: 'camera',
    accent: '#1b48e8',
  },
  {
    number: '02',
    title: 'OCR Processa',
    description: 'Reconhecimento óptico de alta precisão extrai automaticamente todo o conteúdo textual.',
    icon: 'scan-text',
    accent: '#7c3aed',
  },
  {
    number: '03',
    title: 'IA Simplifica',
    description: 'LLMs de última geração reorganizam e simplificam o texto mantendo todo o significado.',
    icon: 'brain',
    accent: '#d97706',
  },
  {
    number: '04',
    title: 'Layout Adaptado',
    description: 'Fonte, espaçamento e contraste ajustados especificamente para leitores com dislexia.',
    icon: 'eye',
    accent: '#16a34a',
  },
  {
    number: '05',
    title: 'Ouça e Leia',
    description: 'TTS sincronizado destaca cada palavra enquanto lê — foco total, sem perder nenhum detalhe.',
    icon: 'volume',
    accent: '#db2777',
  },
] as const

export const features = [
  {
    title: 'OCR Inteligente',
    description: 'Reconhece texto em fotos, PDFs e imagens com alta precisão, inclusive em fontes manuscritas.',
    icon: 'scan-text',
    gradient: 'feature-card--blue',
  },
  {
    title: 'Simplificação com IA',
    description: 'LLMs reescrevem textos complexos em linguagem acessível sem perder nenhuma informação.',
    icon: 'sparkles',
    gradient: 'feature-card--violet',
  },
  {
    title: 'Leitura por Voz',
    description: 'Narração natural com destaque sincronizado palavra a palavra, velocidade totalmente ajustável.',
    icon: 'volume',
    gradient: 'feature-card--cyan',
  },
  {
    title: 'Layout Acessível',
    description: 'Fonte, espaçamento, tamanho e contraste personalizados para facilitar a decodificação visual.',
    icon: 'eye',
    gradient: 'feature-card--amber',
  },
  {
    title: 'Resumos Automáticos',
    description: 'A IA extrai os pontos principais e gera resumos, explicações e infográficos didáticos.',
    icon: 'file-text',
    gradient: 'feature-card--rose',
  },
  {
    title: 'Progresso e Insights',
    description: 'Monitoramento de tempo de leitura, palavras difíceis e evolução do desempenho ao longo do tempo.',
    icon: 'chart-line',
    gradient: 'feature-card--green',
  },
] as const

export const comparisonRows = [
  'Reconhecimento OCR',
  'Simplificação com IA (LLMs)',
  'Leitura por Voz (TTS)',
  'Layout para Dislexia',
  'Resumos Automáticos',
  'Infográficos e Conteúdo Visual',
  'Monitoramento de Progresso',
  'Personalização Completa',
] as const

export const comparisonMatrix = [
  { resource: 'Reconhecimento OCR', luz: 'check', ocr: 'check', tts: 'x', accessibility: 'x' },
  { resource: 'Simplificação com IA (LLMs)', luz: 'check', ocr: 'x', tts: 'x', accessibility: 'x' },
  { resource: 'Leitura por Voz (TTS)', luz: 'check', ocr: 'x', tts: 'check', accessibility: 'check' },
  { resource: 'Layout para Dislexia', luz: 'check', ocr: 'x', tts: 'x', accessibility: 'check' },
  { resource: 'Resumos Automáticos', luz: 'check', ocr: 'x', tts: 'x', accessibility: 'x' },
  { resource: 'Infográficos e Conteúdo Visual', luz: 'check', ocr: 'x', tts: 'x', accessibility: 'x' },
  { resource: 'Monitoramento de Progresso', luz: 'check', ocr: 'x', tts: 'x', accessibility: 'x' },
  { resource: 'Personalização Completa', luz: 'check', ocr: 'x', tts: 'check', accessibility: 'x' },
] as const

export const benefitTabs = {
  Estudantes: [
    'Leia qualquer material escolar com mais facilidade e conforto',
    'Entenda textos complexos com resumos automáticos gerados por IA',
    'Ouça o conteúdo enquanto acompanha a leitura visualmente',
    'Monitore sua evolução e identifique as palavras que mais te desafiam',
    'Reduza a ansiedade e ganhe confiança nos estudos',
  ],
  Professores: [
    'Prepare materiais adaptados para diferentes perfis de leitura',
    'Apoie estudantes com recursos de acessibilidade sem refazer o conteúdo do zero',
    'Gere resumos e explicações para revisão rápida em sala',
    'Acompanhe evolução e dificuldades para intervenções mais precisas',
  ],
  Famílias: [
    'Ajude crianças e adolescentes a estudar com menos frustração',
    'Transforme textos longos em conteúdo mais compreensível em poucos segundos',
    'Use voz, texto adaptado e resumo no mesmo fluxo',
    'Acompanhe autonomia e evolução ao longo do tempo',
  ],
} as const

export const benefitPanels = {
  Estudantes: {
    icon: 'graduation-cap',
    label: 'Autonomia e confiança na leitura',
  },
  Professores: {
    icon: 'book-open',
    label: 'Inclusão real dentro da sala de aula',
  },
  Famílias: {
    icon: 'heart',
    label: 'Apoio em cada etapa do aprendizado',
  },
} as const

export const metrics = [
  { value: '15–20%', label: 'da população tem dislexia', source: 'International Dyslexia Association, 2023', icon: 'users' },
  { value: '2,5×', label: 'mais retenção com texto adaptado', source: 'Journal of Learning Disabilities, 2022', icon: 'brain' },
  { value: '67%', label: 'melhora na compreensão com IA', source: 'MIT Media Lab — AI Literacy, 2024', icon: 'sparkles' },
  { value: '40%', label: 'redução da carga cognitiva com TTS', source: 'Cambridge Reading Research, 2023', icon: 'volume' },
] as const

export const testimonials = [
  {
    name: 'Lucas Mendes',
    role: 'Estudante, 17 anos',
    quote:
      'Antes eu travava em qualquer texto longo. Com o LUZ, consigo ler minhas apostilas sem aquela sensação de pânico. As letras parecem fazer mais sentido.',
  },
  {
    name: 'Prof. Ana Ribeiro',
    role: 'Professora do Ensino Médio',
    quote:
      'Finalmente uma solução que realmente inclui. Uso o LUZ para preparar materiais adaptados e vejo a diferença na participação dos alunos que antes ficavam de fora.',
  },
  {
    name: 'Carla Ferreira',
    role: 'Mãe de estudante com dislexia',
    quote:
      'Meu filho de 12 anos passou a ler por conta própria. O LUZ transformou a relação dele com os livros — e reduziu muito o estresse nas noites de estudo.',
  },
] as const

export const faqItems = [
  {
    question: 'O LUZ é gratuito?',
    answer: 'Sim, o modelo inicial pode oferecer acesso gratuito por tempo limitado para validação e expansão da base de usuários.',
  },
  {
    question: 'Quais formatos de arquivo o aplicativo suporta?',
    answer: 'O fluxo foi pensado para imagens, PDFs e documentos digitais enviados pelo usuário.',
  },
  {
    question: 'Como a IA adapta o texto sem perder o significado?',
    answer: 'A IA reescreve e reorganiza o conteúdo preservando as ideias principais, simplificando apenas a forma de apresentação.',
  },
  {
    question: 'O aplicativo funciona offline?',
    answer: 'A experiência principal depende de processamento online, mas partes do fluxo podem ser preparadas para uso local no futuro.',
  },
  {
    question: 'O LUZ é adequado para todas as faixas etárias?',
    answer: 'Sim. A linguagem e os recursos podem ser adaptados para estudantes, professores e famílias.',
  },
  {
    question: 'Preciso de diagnóstico de dislexia para usar o LUZ?',
    answer: 'Não. O app pode ajudar qualquer pessoa que precise de uma leitura mais clara e acessível.',
  },
] as const

export type IconName =
  | 'menu'
  | 'x'
  | 'arrow-right'
  | 'sparkles'
  | 'camera'
  | 'scan-text'
  | 'brain'
  | 'eye'
  | 'volume'
  | 'check'
  | 'file-text'
  | 'chart-line'
  | 'users'
  | 'graduation-cap'
  | 'book-open'
  | 'heart'
  | 'star'
  | 'chevron-down'

export type BenefitKey = keyof typeof benefitTabs