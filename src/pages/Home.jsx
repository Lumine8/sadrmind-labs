import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

const PRODUCTS = [
  {
    name: 'SecuADR',
    tagline: 'Secure Adaptive Authentication',
    desc: 'Gesture-based fallback authentication and behavioral verification. Multi-layered security that adapts to every user's unique interaction patterns.',
    icon: '🔐',
    tags: [{ label: 'Security', color: 'violet' }, { label: 'Auth', color: 'blue' }],
    to: '/secuadr',
    accent: 'violet',
  },
  {
    name: 'Sudoku Shift',
    tagline: 'Competitive Puzzle Combat',
    desc: 'Classic puzzles reimagined with abilities, chaos events, and multiplayer mechanics. Outwit opponents in a game where every move counts.',
    icon: '🎮',
    tags: [{ label: 'Gaming', color: 'amber' }, { label: 'Multiplayer', color: 'pink' }],
    to: '/sudoku-shift',
    accent: 'blue',
  },
  {
    name: 'Arbitrix',
    tagline: 'AI Trading Research Engine',
    desc: 'Reinforcement learning meets financial markets. An intelligent research platform for building and testing adaptive trading strategies at scale.',
    icon: '📈',
    tags: [{ label: 'AI/ML', color: 'green' }, { label: 'Finance', color: 'blue' }],
    to: '/arbitrix',
    accent: 'green',
  },
]

const STATS = [
  { number: '3', label: 'Core Products' },
  { number: '4', label: 'Tech Domains' },
  { number: '∞', label: 'Iterations' },
  { number: '01', label: 'Vision' },
]

export default function Home() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────── */}
      <section className="home-hero">
        <div className="home-hero__bg">
          <div className="grid-lines" />
          <div className="glow-1" />
          <div className="glow-2" />
        </div>

        <div className="container">
          <div className="home-hero__content">
            <div className="home-hero__eyebrow fade-up">
              <div className="dot" />
              Research-Driven Technology Studio
            </div>

            <h1 className="home-hero__title fade-up delay-1">
              <span className="line-1">SADRmind</span>
              <br />
              <span className="line-2">Labs</span>
            </h1>

            <p className="home-hero__subtitle fade-up delay-2">
              Building intelligent systems for security, finance, and interactive experiences.
              Where deep research meets elegant engineering.
            </p>

            <div className="home-hero__actions fade-up delay-3">
              <Link to="/products" className="btn btn--primary">
                Explore Products <span className="arrow">→</span>
              </Link>
              <Link to="/about" className="btn btn--outline">
                Our Philosophy
              </Link>
            </div>
          </div>
        </div>

        <div className="home-hero__scroll-hint">
          <div className="line" />
          <span>SCROLL</span>
        </div>
      </section>

      {/* ─── Stats ────────────────────────────── */}
      <section className="section" style={{ background: 'rgba(13,18,37,0.5)', borderTop: '1px solid rgba(120,130,180,0.08)', borderBottom: '1px solid rgba(120,130,180,0.08)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', textAlign: 'center' }}>
            {STATS.map((s, i) => (
              <div key={s.label} className={`stat fade-up delay-${i + 1}`}>
                <div className="stat__number">{s.number}</div>
                <div className="stat__label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Products ─────────────────────────── */}
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: '3rem' }}>
            <div className="section-label fade-up">Products</div>
            <h2 className="section-title fade-up delay-1" style={{ marginTop: '1rem', marginBottom: '1rem' }}>
              Intelligent systems,<br /><span>precisely crafted</span>
            </h2>
            <p className="section-body fade-up delay-2">
              Each product represents months of research and engineering — built to solve hard problems elegantly.
            </p>
          </div>

          <div className="grid-3">
            {PRODUCTS.map((p, i) => (
              <div key={p.name} className={`delay-${i + 1}`}>
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── About Preview ────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="about-preview">
            <div className="about-preview__text">
              <div className="section-label fade-up">About SADRmind Labs</div>
              <h2 className="section-title fade-up delay-1" style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
                Research-driven<br /><span>innovation</span>
              </h2>
              <p className="section-body fade-up delay-2">
                We operate at the intersection of security, artificial intelligence, financial automation, and game technology — building systems that are not just functional, but genuinely intelligent.
              </p>
              <div style={{ marginTop: '2rem' }} className="fade-up delay-3">
                <Link to="/about" className="btn btn--outline">
                  Learn more about us <span className="arrow">→</span>
                </Link>
              </div>
            </div>

            <div className="about-preview__visual fade-up delay-2">
              <div className="floating-card floating-card--1">
                <div className="card-label">DOMAIN</div>
                <div className="card-value">Security AI</div>
              </div>
              <div className="floating-card floating-card--2">
                <div className="card-label">APPROACH</div>
                <div className="card-value">Research-First</div>
              </div>
              <div className="floating-card floating-card--3">
                <div className="card-label">METHODOLOGY</div>
                <div className="card-value">Adaptive Systems</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────── */}
      <section className="cta-section">
        <div className="cta-section__bg" />
        <div className="container">
          <div className="cta-section__content">
            <h2 className="cta-section__title fade-up">
              Ready to explore <span style={{ background: 'linear-gradient(135deg, #38bdf8, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>what we're building?</span>
            </h2>
            <p className="cta-section__desc fade-up delay-1">
              Dive into our products, read about our philosophy, or reach out directly to discuss collaboration.
            </p>
            <div className="cta-section__actions fade-up delay-2">
              <Link to="/products" className="btn btn--primary">
                View All Products
              </Link>
              <Link to="/contact" className="btn btn--outline">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
