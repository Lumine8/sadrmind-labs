import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

const PRODUCTS = [
  {
    name: 'SecuADR',
    desc: 'Secure adaptive authentication with gesture-based fallback login and behavioral verification. Multi-layered defense that learns your unique interaction patterns.',
    icon: '🔐',
    tags: [{ label: 'Security', color: 'violet' }, { label: 'Authentication', color: 'blue' }, { label: 'Biometrics', color: 'violet' }],
    to: '/secuadr',
    accent: 'violet',
  },
  {
    name: 'Sudoku Shift',
    desc: 'Competitive Sudoku with chaos events, special abilities, and AI opponents. Puzzle mechanics reimagined for fast-paced multiplayer competition.',
    icon: '🎮',
    tags: [{ label: 'Gaming', color: 'amber' }, { label: 'Multiplayer', color: 'pink' }, { label: 'AI Opponents', color: 'blue' }],
    to: '/sudoku-shift',
    accent: 'blue',
  },
  {
    name: 'Arbitrix',
    desc: 'Intelligent trading research platform integrating reinforcement learning and adaptive decision strategies. Research-grade infrastructure for quantitative exploration.',
    icon: '📈',
    tags: [{ label: 'AI/ML', color: 'green' }, { label: 'Finance', color: 'blue' }, { label: 'RL', color: 'green' }],
    to: '/arbitrix',
    accent: 'green',
  },
]

export default function Products() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__bg">
          <div className="orb orb--1" />
          <div className="orb orb--2" />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: '6rem' }}>
          <div className="page-hero__label">
            <span className="section-label">Our Products</span>
          </div>
          <h1 className="section-title fade-up delay-1" style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
            What we're<br /><span>building</span>
          </h1>
          <p className="section-body fade-up delay-2">
            Three flagship products across security, gaming, and financial AI — each the result of deep research and iterative engineering.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="grid-3">
            {PRODUCTS.map((p, i) => (
              <div key={p.name} className={`fade-up delay-${i + 1}`}>
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'rgba(13,18,37,0.6)', borderTop: '1px solid rgba(120,130,180,0.08)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            <div>
              <div className="section-label fade-up">Cross-Domain Synergy</div>
              <h2 className="section-title fade-up delay-1" style={{ marginTop: '1rem', marginBottom: '1.5rem', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}>
                Connected by a<br /><span>common thread</span>
              </h2>
              <p className="section-body fade-up delay-2" style={{ fontSize: '0.9rem' }}>
                Whether it's detecting anomalous behavior in authentication, building adaptive opponents in games, or training agents on market data — all three products share our core belief: <em style={{ color: '#f0f4ff' }}>adaptive intelligence beats rigid rules.</em>
              </p>
            </div>
            <div className="fade-up delay-2" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { icon: '🧠', label: 'Adaptive Learning', desc: 'All products evolve based on user behavior and environmental feedback.' },
                { icon: '🔗', label: 'Shared Architecture', desc: 'Common reinforcement learning primitives underpin each platform.' },
                { icon: '⚡', label: 'Real-Time Systems', desc: 'Low-latency decision engines powering each product domain.' },
              ].map(item => (
                <div key={item.label} className="feature-item">
                  <div className="feature-item__icon">{item.icon}</div>
                  <div>
                    <div className="feature-item__title">{item.label}</div>
                    <div className="feature-item__desc">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
