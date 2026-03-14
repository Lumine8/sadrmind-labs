import React from 'react'
import { Link } from 'react-router-dom'

const PILLARS = [
  { icon: '🔬', title: 'Research-First',             desc: "Every product begins with a research question. We don't build solutions looking for problems — we study systems deeply before writing a line of production code." },
  { icon: '🧠', title: 'Adaptive Intelligence',      desc: "Rigid systems fail in complex environments. We build software that observes, learns, and adjusts — whether that's an auth system, a trading engine, or a game AI." },
  { icon: '⚗️', title: 'Principled Experimentation', desc: 'We iterate fast, but not blindly. Every experiment has a hypothesis. Every deployment has instrumentation. Data drives decisions, not assumptions.' },
  { icon: '🏗️', title: 'Lasting Foundations',        desc: 'We build infrastructure that compounds. Shared primitives across our products create compounding returns on every engineering investment.' },
]

const DOMAINS = [
  { icon: '🔐', label: 'Security',                color: '#a855f7', desc: 'Adaptive authentication and behavioural verification systems that protect without friction.' },
  { icon: '🤖', label: 'Artificial Intelligence', color: '#38bdf8', desc: 'Reinforcement learning, behavioural modelling, and adaptive decision systems across all our products.' },
  { icon: '📈', label: 'Financial Automation',    color: '#10b981', desc: 'Research-grade infrastructure for intelligent trading strategy development and testing.' },
  { icon: '🎮', label: 'Game Technology',         color: '#f59e0b', desc: 'AI-driven game mechanics, procedural systems, and competitive multiplayer infrastructure.' },
]

export default function About() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="page-hero">
        <div className="page-hero__bg">
          <div className="orb orb--1" />
          <div className="orb orb--2" />
        </div>
        <div className="container about-hero-inner">
          <div className="section-label fade-up">About SADRmind Labs</div>
          <h1 className="section-title fade-up delay-1" style={{ marginTop: '1rem', marginBottom: '1.5rem', maxWidth: '14ch' }}>
            We build systems<br />that <span>think</span>
          </h1>
          <p className="section-body fade-up delay-2">
            SADRmind Labs is a technology studio operating at the frontier of adaptive intelligent
            systems. We're not a consultancy or a services shop. We're researchers and engineers
            who build products that embody one core belief:{' '}
            <em style={{ color: '#eef2ff', fontStyle: 'italic' }}>the best software learns from its environment.</em>
          </p>
        </div>
      </section>

      {/* ── Philosophy ───────────────────────────────── */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-header">
            <div className="section-label fade-up">Our Philosophy</div>
            <h2 className="section-title fade-up delay-1" style={{ marginTop: '1rem' }}>
              Four pillars of<br /><span>how we work</span>
            </h2>
          </div>
          <div className="grid-2">
            {PILLARS.map((p, i) => (
              <div key={p.title} className={`feature-item fade-up delay-${i + 1}`}
                style={{ flexDirection: 'column' }}>
                <div className="feature-item__icon"
                  style={{ fontSize: '1.3rem', marginBottom: '1rem', alignSelf: 'flex-start' }}>
                  {p.icon}
                </div>
                <div className="feature-item__title" style={{ fontSize: '1.05rem' }}>{p.title}</div>
                <div className="feature-item__desc">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Domains ──────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="section-header section-header--center">
            <div className="section-label fade-up" style={{ justifyContent: 'center' }}>Our Domains</div>
            <h2 className="section-title fade-up delay-1" style={{ marginTop: '1rem' }}>
              Where we operate
            </h2>
          </div>
          <div className="grid-2">
            {DOMAINS.map((d, i) => (
              <div key={d.label} className={`feature-item fade-up delay-${i + 1}`}
                style={{ borderColor: `${d.color}1a`, background: `${d.color}06` }}>
                <div className="feature-item__icon"
                  style={{ background: `${d.color}18`, borderColor: `${d.color}2e`, fontSize: '1.25rem' }}>
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

      {/* ── Manifesto ────────────────────────────────── */}
      <section className="section section--alt">
        <div className="container">
          <div className="about-manifesto fade-up">
            <div className="section-label" style={{ justifyContent: 'center', marginBottom: '2rem' }}>Our Manifesto</div>
            <blockquote className="about-manifesto__quote">
              "Intelligence isn't a feature you bolt on — it's an architectural decision you make from day one."
            </blockquote>
            <p className="about-manifesto__body fade-up delay-1">
              The era of static software is ending. Users expect systems that know them, markets
              demand strategies that adapt, games become interesting only when opponents think.
              We build for that future — not by chasing trends, but by going deeper into the
              science of adaptive systems.
            </p>
            <div className="fade-up delay-2" style={{ marginTop: '2.5rem' }}>
              <Link to="/contact" className="btn btn--primary">Work with us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
