import React from 'react'
import { Link } from 'react-router-dom'

const PILLARS = [
  {
    icon: '🔬',
    title: 'Research-First',
    desc: 'Every product begins with a research question. We don\'t build solutions looking for problems — we study systems deeply before writing a line of production code.',
  },
  {
    icon: '🧠',
    title: 'Adaptive Intelligence',
    desc: 'Rigid systems fail in complex environments. We build software that observes, learns, and adjusts — whether that\'s an auth system, a trading engine, or a game AI.',
  },
  {
    icon: '⚗️',
    title: 'Principled Experimentation',
    desc: 'We iterate fast, but not blindly. Every experiment has a hypothesis. Every deployment has instrumentation. Data drives decisions, not assumptions.',
  },
  {
    icon: '🏗️',
    title: 'Lasting Foundations',
    desc: 'We build infrastructure that compounds. Shared primitives across our products — reinforcement learning modules, behavioral modeling pipelines — create compounding returns on engineering effort.',
  },
]

const DOMAINS = [
  { icon: '🔐', label: 'Security', color: '#a855f7', desc: 'Adaptive authentication and behavioral verification systems that protect without friction.' },
  { icon: '🤖', label: 'Artificial Intelligence', color: '#38bdf8', desc: 'Reinforcement learning, behavioral modeling, and adaptive decision systems across all our products.' },
  { icon: '📈', label: 'Financial Automation', color: '#10b981', desc: 'Research-grade infrastructure for intelligent trading strategy development and testing.' },
  { icon: '🎮', label: 'Game Technology', color: '#f59e0b', desc: 'AI-driven game mechanics, procedural systems, and competitive multiplayer infrastructure.' },
]

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero" style={{ paddingTop: '8rem' }}>
        <div className="page-hero__bg">
          <div className="orb orb--1" />
          <div className="orb orb--2" />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-label fade-up">About SADRmind Labs</div>
          <h1 className="section-title fade-up delay-1" style={{ marginTop: '1rem', marginBottom: '1.5rem', maxWidth: '14ch' }}>
            We build systems that <span>think</span>
          </h1>
          <p className="section-body fade-up delay-2">
            SADRmind Labs is a technology studio operating at the frontier of adaptive intelligent systems. We're not a consultancy. We're not a services shop. We're researchers and engineers who build products that embody a core belief: <em style={{ color: '#f0f4ff' }}>the best software learns from its environment.</em>
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section" style={{ background: 'rgba(13,18,37,0.5)', borderTop: '1px solid rgba(120,130,180,0.08)' }}>
        <div className="container">
          <div style={{ marginBottom: '3rem' }}>
            <div className="section-label fade-up">Our Philosophy</div>
            <h2 className="section-title fade-up delay-1" style={{ marginTop: '1rem' }}>
              Four pillars of<br /><span>how we work</span>
            </h2>
          </div>
          <div className="grid-2">
            {PILLARS.map((p, i) => (
              <div key={p.title} className={`feature-item fade-up delay-${i + 1}`} style={{ flexDirection: 'column' }}>
                <div className="feature-item__icon" style={{ marginBottom: '1rem', fontSize: '1.4rem' }}>{p.icon}</div>
                <div className="feature-item__title" style={{ fontSize: '1.1rem' }}>{p.title}</div>
                <div className="feature-item__desc">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domains */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-label fade-up" style={{ justifyContent: 'center' }}>Our Domains</div>
            <h2 className="section-title fade-up delay-1" style={{ marginTop: '1rem' }}>
              Where we operate
            </h2>
          </div>
          <div className="grid-2">
            {DOMAINS.map((d, i) => (
              <div key={d.label} className={`feature-item fade-up delay-${i + 1}`}
                style={{ borderColor: `${d.color}22`, background: `${d.color}08` }}>
                <div className="feature-item__icon"
                  style={{ background: `${d.color}18`, borderColor: `${d.color}30`, fontSize: '1.3rem' }}>
                  {d.icon}
                </div>
                <div>
                  <div className="feature-item__title" style={{ color: d.color }}>{d.label}</div>
                  <div className="feature-item__desc">{d.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="section" style={{ background: 'rgba(13,18,37,0.6)', borderTop: '1px solid rgba(120,130,180,0.08)' }}>
        <div className="container">
          <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
            <div className="section-label fade-up" style={{ justifyContent: 'center' }}>Our Manifesto</div>
            <blockquote className="fade-up delay-1" style={{
              fontFamily: 'Syne', fontSize: 'clamp(1.2rem, 3vw, 1.7rem)', fontWeight: 700,
              lineHeight: 1.4, marginTop: '1.5rem', marginBottom: '2rem',
              color: '#f0f4ff', letterSpacing: '-0.01em',
            }}>
              "Intelligence isn't a feature you bolt on — it's an architectural decision you make from day one."
            </blockquote>
            <p className="fade-up delay-2" style={{ color: 'rgba(136,146,176,0.8)', fontSize: '0.9rem', lineHeight: 1.75, marginBottom: '2rem' }}>
              The era of static software is ending. Users expect systems that know them, markets demand strategies that adapt, games become interesting only when opponents think. We build for that future — not by chasing trends, but by going deeper into the science of adaptive systems.
            </p>
            <div className="fade-up delay-3">
              <Link to="/contact" className="btn btn--primary">Work with us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
