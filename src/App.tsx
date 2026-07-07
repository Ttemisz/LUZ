import { useState } from 'react'
import { Icon } from './components/Icon'
import { SectionHeading } from './components/SectionHeading'
import {
  benefitTabs,
  benefitPanels,
  challengeItems,
  comparisonMatrix,
  faqItems,
  features,
  heroStats,
  metrics,
  navLinks,
  steps,
  testimonials,
  type BenefitKey,
  type IconName,
} from './data/landing'
import './App.css'

const benefitKeys = Object.keys(benefitTabs) as BenefitKey[]

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeBenefit, setActiveBenefit] = useState<BenefitKey>('Estudantes')
  const [openFaq, setOpenFaq] = useState<number>(0)

  const activeBenefitPanel = benefitPanels[activeBenefit]

  function handleCtaSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const email = String(formData.get('email') ?? '').trim()

    if (!email) {
      return
    }

    const subject = encodeURIComponent('Novo interesse no LUZ')
    const body = encodeURIComponent(
      [
        'Olá,',
        '',
        'Vi a landing page do LUZ e quero receber acesso gratuito.',
        '',
        'Dados para contato:',
        `- E-mail: ${email}`,
        '',
        'Fico no aguardo.',
        '',
        'Obrigado,',
        'Equipe LUZ',
      ].join('\n'),
    )

    window.location.href = `mailto:temistoclis.ribeiro@ufrpe.br?subject=${subject}&body=${body}`
  }

  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="container nav-bar">
          <a className="brand" href="#top" aria-label="LUZ">
            <div className="brand__text">
              <div className="brand__main">
                <span className="brand__dot" />
                <span className="brand__wordmark">LUZ</span>
              </div>
              <span className="brand__tagline">IA &amp; Acessibilidade</span>
            </div>
          </a>

          <nav className="nav-links" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <a className="ghost-button" href="#cta">
              Entrar
            </a>
            <a className="primary-button primary-button--small" href="#cta">
              Experimente Grátis
            </a>
            <button
              type="button"
              className="icon-button nav-menu-button"
              onClick={() => setMobileMenuOpen((value) => !value)}
              aria-expanded={mobileMenuOpen}
              aria-label="Abrir menu"
            >
              <Icon name={mobileMenuOpen ? 'x' : 'menu'} className="icon icon--sm" />
            </button>
          </div>
        </div>

        {mobileMenuOpen ? (
          <div className="mobile-nav container">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)}>
                {link.label}
              </a>
            ))}
            <a className="primary-button primary-button--full" href="#cta" onClick={() => setMobileMenuOpen(false)}>
              Experimente Grátis
            </a>
          </div>
        ) : null}
      </header>

      <main>
        <section id="top" className="hero-section">
          <div className="hero-section__glow hero-section__glow--left" />
          <div className="hero-section__glow hero-section__glow--right" />
          <div className="hero-section__glow hero-section__glow--bottom" />

          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">
                <Icon name="sparkles" className="icon icon--xs icon--accent" />
                IA para Acessibilidade Educacional
              </div>

              <h1 className="hero-title">
                <span>Leia com</span>
                <span className="hero-title__accent">mais liberdade.</span>
              </h1>

              <p className="hero-text">
                O <strong>LUZ</strong> usa Inteligência Artificial para transformar qualquer texto em uma experiência
                de leitura personalizada para pessoas com dislexia.
              </p>

              <div className="hero-actions">
                <a className="primary-button" href="#cta">
                  Baixar Grátis
                  <Icon name="arrow-right" className="icon icon--sm" />
                </a>
                <a className="secondary-button" href="#demo">
                  Ver Demonstração
                </a>
              </div>

              <div className="hero-stats">
                {heroStats.map((stat) => (
                  <article key={stat.label} className="hero-stat">
                    <strong>{stat.value}</strong>
                    <p>{stat.label}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="hero-device">
              <div className="device-card device-card--main">
                <div className="device-card__topbar">
                  <span>9:41</span>
                  <div className="device-card__signal" />
                </div>

                <div className="device-card__brandbar">
                  <div className="device-badge">
                    <span>L</span>
                  </div>
                  <strong>LUZ</strong>
                  <div className="device-actions">
                    <button type="button" className="icon-button icon-button--soft" title="Régua de Leitura">
                      <Icon name="eye" className="icon icon--xs icon--light" />
                    </button>
                    <button type="button" className="icon-button icon-button--soft" title="Histórico">
                      <Icon name="book-open" className="icon icon--xs icon--light" />
                    </button>
                  </div>
                </div>

                <div className="device-card__body">
                  <div className="device-status">
                    <Icon name="file-text" className="icon icon--xs icon--accent" />
                    <span>Resumo e Exercícios de IA.pdf</span>
                  </div>

                  <div className="device-output">
                    <div className="device-output__title">
                      <Icon name="sparkles" className="icon icon--xs icon--brand" />
                      Termos difíceis
                    </div>
                    
                    <div className="device-ruler-container">
                      <div className="device-ruler-btn">
                        <span className="dot-green" /> Desativar régua
                      </div>
                      <div className="device-card-title">API (Application Programming Interface)</div>
                      <p className="device-text-ruler-active">
                        <span className="ruler-line ruler-line--active">É um conjunto de regras que permite</span>
                        <span className="ruler-line ruler-line--blurred">que diferentes programas de computador</span>
                        <span className="ruler-line ruler-line--blurred">conversem e troquem informações.</span>
                      </p>
                    </div>
                  </div>

                  <div className="device-controls">
                    <button type="button" className="control-button control-button--primary">
                      <Icon name="check" className="icon icon--xs icon--light" />
                      Leitor
                    </button>
                    <button type="button" className="control-button">
                      <Icon name="book-open" className="icon icon--xs" />
                      Histórico
                    </button>
                  </div>
                </div>
              </div>
              <div className="floating-card floating-card--top">
                <span>Upload de PDF</span>
                <strong>Até 10 pág.</strong>
              </div>
              <div className="floating-card floating-card--bottom">
                <span>Guia Visual</span>
                <strong>Com Régua</strong>
              </div>
            </div>
          </div>

          <div className="hero-wave" aria-hidden="true">
            <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 60H1440V30C1200 60 960 0 720 0C480 0 240 60 0 30V60Z" fill="white" />
            </svg>
          </div>
        </section>

        <section className="section section--light">
          <div className="container two-column-grid">
            <div>
              <SectionHeading
                eyebrow="O Desafio"
                titleTop="A dislexia torna a leitura um"
                titleBottom="desafio diário"
                description="Pessoas com dislexia não têm problemas de inteligência — elas processam a linguagem escrita de modo diferente. Com o suporte certo, podem ir tão longe quanto qualquer pessoa."
              />

              <div className="stack-list">
                {challengeItems.map((item) => (
                  <article key={item.title} className="stack-item">
                    <div className={`stack-icon stack-icon--${item.tone}`}>
                      <Icon name={item.icon as IconName} className="icon icon--sm" />
                    </div>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="media-card">
              <div className="media-card__art" />
              <div className="media-card__badge">
                <strong>1 em 5</strong>
                <p>estudantes tem algum grau de dislexia</p>
              </div>
            </div>
          </div>
        </section>

        <section id="como-funciona" className="section section--muted">
          <div className="container">
            <SectionHeading
              eyebrow="Como Funciona"
              titleTop="Cinco passos para uma"
              titleBottom="leitura sem barreiras"
            />

            <div className="steps-grid">
              {steps.map((step) => (
                <article key={step.number} className="step-card">
                  <div className="step-card__icon" style={{ color: step.accent }}>
                    <Icon name={step.icon as IconName} className="icon icon--md" />
                  </div>
                  <div className="step-card__number">{step.number}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="funcionalidades" className="section section--light">
          <div className="container">
            <SectionHeading
              eyebrow="Funcionalidades"
              titleTop="Tudo que você precisa,"
              titleBottom="em um único app"
            />

            <div className="feature-grid">
              {features.map((feature) => (
                <article key={feature.title} className={`feature-card ${feature.gradient}`}>
                  <div className="feature-card__icon">
                    <Icon name={feature.icon as IconName} className="icon icon--sm icon--light" />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--primary section--contrast">
          <div className="container">
            <SectionHeading
              eyebrow="Diferenciais"
              titleTop="O que nos torna"
              titleBottom="únicos"
              description="Enquanto concorrentes resolvem um problema de cada vez, o LUZ integra tudo em uma experiência completa."
            />

            <div className="comparison-table comparison-table--desktop">
              <div className="comparison-table__header">
                <span>Recurso</span>
                <span className="comparison-table__brand">LUZ</span>
                <span>Apps de OCR</span>
                <span>Apps de TTS</span>
                <span>Ferramentas de Acessibilidade</span>
              </div>
              {comparisonMatrix.map((row, index) => (
                <div key={row.resource} className={`comparison-table__row ${index % 2 === 0 ? 'is-alt' : ''}`}>
                  <span>{row.resource}</span>
                  <span className="comparison-table__check">
                    <Icon name={row.luz === 'check' ? 'check' : 'x'} className="icon icon--sm icon--accent" />
                  </span>
                  <span className="comparison-table__check">
                    <Icon
                      name={row.ocr === 'check' ? 'check' : 'x'}
                      className={`icon icon--sm ${row.ocr === 'check' ? 'icon--comparison-blue' : 'icon--muted'}`}
                    />
                  </span>
                  <span className="comparison-table__check">
                    <Icon
                      name={row.tts === 'check' ? 'check' : 'x'}
                      className={`icon icon--sm ${row.tts === 'check' ? 'icon--comparison-blue' : 'icon--muted'}`}
                    />
                  </span>
                  <span className="comparison-table__check">
                    <Icon
                      name={row.accessibility === 'check' ? 'check' : 'x'}
                      className={`icon icon--sm ${row.accessibility === 'check' ? 'icon--comparison-blue' : 'icon--muted'}`}
                    />
                  </span>
                </div>
              ))}
            </div>

            <div className="comparison-mobile-list">
              {comparisonMatrix.map((row) => (
                <div key={row.resource} className="comparison-mobile-item">
                  <div className="comparison-mobile-icon">
                    <Icon name="check" className="icon icon--sm icon--accent" />
                  </div>
                  <span>{row.resource}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="beneficios" className="section section--light">
          <div className="container">
            <SectionHeading
              eyebrow="Benefícios"
              titleTop="Para cada pessoa"
              titleBottom="no processo de aprendizagem"
            />

            <div className="pill-group" role="tablist" aria-label="Perfil de usuário">
              {benefitKeys.map((key) => (
                <button
                  key={key}
                  type="button"
                  className={`pill ${activeBenefit === key ? 'pill--active' : ''}`}
                  onClick={() => setActiveBenefit(key)}
                >
                  {key}
                </button>
              ))}
            </div>

            <div className="benefits-grid">
              <div className="benefits-list">
                {benefitTabs[activeBenefit].map((item) => (
                  <div key={item} className="benefits-list__item">
                    <Icon name="check" className="icon icon--sm icon--brand" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="benefits-panel">
                <div className="benefits-panel__icon">
                  <Icon name={activeBenefitPanel.icon as IconName} className="icon icon--xl icon--brand" />
                </div>
                <strong>{activeBenefitPanel.label}</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--muted">
          <div className="container">
            <SectionHeading
              eyebrow="Base Científica"
              titleTop="Respaldado pela"
              titleBottom="ciência"
              description="O LUZ é desenvolvido com base nas pesquisas mais recentes sobre dislexia, IA e acessibilidade educacional."
            />

            <div className="metrics-grid">
              {metrics.map((metric) => (
                <article key={metric.label} className="metric-card">
                  <div className="metric-card__icon">
                    <Icon name={metric.icon as IconName} className="icon icon--sm icon--brand" />
                  </div>
                  <strong>{metric.value}</strong>
                  <p>{metric.label}</p>
                  <span>{metric.source}</span>
                </article>
              ))}
            </div>

            <div className="scientific-card">
              <div className="scientific-grid">
                <article className="scientific-item">
                  <span className="scientific-item__tag">IA &amp; LLMs</span>
                  <h3>IA Generativa e Leitura</h3>
                  <p>
                    Estudos da MIT Media Lab (2024) demonstram que LLMs adaptados para simplificação de texto
                    melhoram a compreensão de leitores com dislexia em até 67%, mantendo fidelidade total ao
                    conteúdo original.
                  </p>
                </article>
                <article className="scientific-item">
                  <span className="scientific-item__tag">Estruturação &amp; Foco</span>
                  <h3>Reorganização por Tópicos</h3>
                  <p>
                    Pesquisas da Universidade de Cambridge (2023) mostram que a reformatação de textos complexos
                    em tópicos claros reduz a carga cognitiva de leitura em 40% para quem tem dislexia.
                  </p>
                </article>
                <article className="scientific-item">
                  <span className="scientific-item__tag">TTS &amp; Bimodalidade</span>
                  <h3>Leitura Bimodal</h3>
                  <p>
                    O modelo de leitura bimodal (visual + auditivo sincronizado) demonstrou aumentar a retenção de
                    conteúdo em 2,5× comparado à leitura silenciosa tradicional — IDA Research, 2022.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section id="demo" className="section section--light">
          <div className="container">
            <SectionHeading
              eyebrow="Demonstração"
              titleTop="Veja a transformação"
              titleBottom="acontecendo em tempo real"
              description="O mesmo texto — antes e depois do LUZ. A informação é preservada; a leitura se torna possível."
            />

            <div className="demo-grid">
              <article className="demo-card demo-card--plain">
                <div className="demo-card__top demo-card__top--plain">
                  <div className="window-dots" aria-hidden="true">
                    <span className="window-dots__dot window-dots__dot--red" />
                    <span className="window-dots__dot window-dots__dot--yellow" />
                    <span className="window-dots__dot window-dots__dot--green" />
                  </div>
                  <span className="demo-card__label">Texto Original</span>
                </div>
                <div className="demo-card__body">
                  <div className="demo-card-title-original">API (Application Programming Interface)</div>
                  <p>
                    &quot;Uma Application Programming Interface é uma interface de computação que define
                    interações entre múltiplos intermediários de software. Ela define os tipos de chamadas
                    ou solicitações que podem ser feitas, como fazê-las, os formatos de dados que devem ser
                    usados, as regras e convenções a serem seguidas...&quot;
                  </p>
                </div>
                <div className="demo-card__footer demo-card__footer--warn">
                  <Icon name="eye" className="icon icon--xs icon--danger" />
                  <span>Difícil de ler — jargões técnicos, frases longas e blocos densos</span>
                </div>
              </article>

              <article className="demo-card demo-card--highlighted">
                <div className="demo-card__top demo-card__top--brand">
                  <Icon name="sparkles" className="icon icon--xs icon--accent" />
                  LUZ — Texto Adaptado pela IA
                </div>
                <div className="demo-card__body demo-card__body--spacious">
                  <div className="demo-ruler-btn">
                    Desativar régua
                  </div>
                  <div className="demo-card-title">API (Application Programming Interface)</div>
                  <p className="demo-text-ruler">
                    <span className="demo-ruler-line demo-ruler-line--active">É um conjunto de regras que permite</span>
                    <span className="demo-ruler-line demo-ruler-line--blurred">que diferentes programas de computador conversem e troquem</span>
                    <span className="demo-ruler-line demo-ruler-line--blurred">informações entre si, como um cardápio de serviços para programas.</span>
                  </p>
                </div>
                <div className="demo-card__footer demo-card__footer--success">
                  <Icon name="check" className="icon icon--xs icon--success" />
                  <span>Simplificado pela IA • Régua de Leitura Ativa • Sem distrações</span>
                </div>
              </article>
            </div>

            <div className="stats-strip">
              <div>
                <strong>3×</strong>
                <p>mais palavras lidas por minuto com layout adaptado</p>
              </div>
              <div>
                <strong>85%</strong>
                <p>dos usuários relatam menos estresse ao ler</p>
              </div>
              <div>
                <strong>92%</strong>
                <p>de precisão na extração e processamento de textos dos PDFs</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--muted">
          <div className="container">
            <SectionHeading
              eyebrow="Depoimentos"
              titleTop="Histórias reais de"
              titleBottom="transformação"
            />

            <div className="testimonial-grid">
              {testimonials.map((testimonial) => (
                <article key={testimonial.name} className="testimonial-card">
                  <div className="testimonial-card__stars" aria-label="5 estrelas">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Icon key={index} name="star" className="icon icon--xs icon--accent" />
                    ))}
                  </div>
                  <p>{testimonial.quote}</p>
                  <div className="testimonial-card__footer">
                    <div className="avatar" aria-hidden="true">
                      {testimonial.name
                        .split(' ')
                        .slice(0, 2)
                        .map((part) => part[0])
                        .join('')}
                    </div>
                    <div>
                      <strong>{testimonial.name}</strong>
                      <span>{testimonial.role}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="section section--light">
          <div className="container container--narrow">
            <SectionHeading eyebrow="FAQ" titleTop="Perguntas" titleBottom="frequentes" />

            <div className="faq-list">
              {faqItems.map((item, index) => {
                const isOpen = openFaq === index

                return (
                  <article key={item.question} className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}>
                    <button type="button" className="faq-item__button" onClick={() => setOpenFaq(isOpen ? -1 : index)}>
                      <span>{item.question}</span>
                      <Icon name="chevron-down" className="icon icon--sm icon--muted faq-item__chevron" />
                    </button>
                    {isOpen ? <div className="faq-item__answer">{item.answer}</div> : null}
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section id="cta" className="cta-section">
          <div className="cta-section__glow cta-section__glow--right" />
          <div className="cta-section__glow cta-section__glow--left" />

          <div className="container container--compact cta-card">
            <div className="eyebrow eyebrow--light">
              <Icon name="sparkles" className="icon icon--xs icon--accent" />
              Acesso Gratuito por Tempo Limitado
            </div>
            <h2>
              <span>Comece a ler com mais</span>
              <span className="hero-title__accent">liberdade hoje</span>
            </h2>
            <p>
              Junte-se a milhares de estudantes, professores e famílias que já descobriram uma nova forma de aprender.
            </p>

            <form className="cta-form" onSubmit={handleCtaSubmit}>
              <input name="email" type="email" placeholder="Seu melhor e-mail" required />
              <button type="submit" className="primary-button primary-button--form">
                Quero Acesso Grátis
              </button>
            </form>

            <small>Sem spam. Cancelamento a qualquer momento. Seus dados estão seguros.</small>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <div className="brand brand--footer">
              <div className="brand__text">
                <div className="brand__main">
                  <span className="brand__dot" />
                  <span className="brand__wordmark">LUZ</span>
                </div>
                <span className="brand__tagline">IA &amp; Acessibilidade</span>
              </div>
            </div>
            <p>Tecnologia de IA para tornar a educação mais inclusiva e acessível.</p>
          </div>

          <div className="footer-links">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
            <a href="#top">Sobre</a>
            <a href="#cta">Contato</a>
            <a href="#">Privacidade</a>
            <a href="#">Termos de Uso</a>
          </div>
        </div>

        <div className="container footer-legal">
          <p>© 2026 LUZ App. Todos os direitos reservados.</p>
          <p>Desenvolvido com dedicação para uma educação mais inclusiva</p>
        </div>
      </footer>
    </div>
  )
}

export default App