import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SAMPLE_GRID = [
  [5,3,0, 0,7,0, 0,0,0],
  [6,0,0, 1,9,5, 0,0,0],
  [0,9,8, 0,0,0, 0,6,0],
  [8,0,0, 0,6,0, 0,0,3],
  [4,0,0, 8,0,3, 0,0,1],
  [7,0,0, 0,2,0, 0,0,6],
  [0,6,0, 0,0,0, 2,8,0],
  [0,0,0, 4,1,9, 0,0,5],
  [0,0,0, 0,8,0, 0,7,9],
]
const HIGHLIGHT_CELLS = new Set(['0-4','1-3','1-4','1-5','2-4'])
const CONFLICT_CELLS  = new Set(['3-4','4-4','5-4','8-4'])

const ABILITIES = [
  { type: 'fire', icon: '🔥', name: 'Inferno Strike', desc: 'Lock a row for your opponent for 30 seconds — they cannot place numbers.' },
  { type: 'ice', icon: '❄️', name: 'Freeze Frame', desc: 'Pause your own timer for 15 seconds to think without penalty.' },
  { type: 'lightning', icon: '⚡', name: 'Volt Reveal', desc: 'Automatically reveal the correct number for one cell of your choice.' },
  { type: 'chaos', icon: '🌀', name: 'Chaos Shuffle', desc: 'Randomly scramble two rows in your opponent\'s board, keeping logical validity.' },
]

const CHAOS_EVENTS = [
  { icon: '💥', name: 'Cell Blackout', desc: '3 random cells hidden from both players for 20 seconds.' },
  { icon: '🔄', name: 'Board Mirror', desc: 'The entire board is flipped horizontally for 10 seconds.' },
  { icon: '⏩', name: 'Speed Surge', desc: 'All timers run at 2× speed for the next 45 seconds.' },
  { icon: '🌊', name: 'Cascade Fill', desc: 'One random correct answer is auto-filled for everyone simultaneously.' },
]

export default function SudokuShift() {
  const [hoveredAbility, setHoveredAbility] = useState(null)

  return (
    <>
      {/* Hero */}
      <section className="page-hero" style={{ paddingTop: '8rem' }}>
        <div className="page-hero__bg">
          <div className="orb orb--1" style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.15), transparent 70%)' }} />
          <div className="orb orb--2" style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.1), transparent 70%)' }} />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="game-accent">
            <div className="section-label fade-up">Sudoku Shift</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '4rem', alignItems: 'center', marginTop: '1rem' }}>
              <div>
                <h1 className="section-title fade-up delay-1" style={{ marginBottom: '1.5rem' }}>
                  Sudoku. Evolved.<br /><span>Weaponized.</span>
                </h1>
                <p className="section-body fade-up delay-2">
                  The classic puzzle, reimagined as a competitive battlefield. Wield special abilities, survive chaos events, and outthink AI opponents and real players in fast-paced puzzle combat.
                </p>

                <div className="badge-strip fade-up delay-3">
                  {['Multiplayer', 'AI Opponents', 'Chaos Events', 'Abilities', 'Ranked Mode'].map(b => (
                    <span key={b} className="badge">
                      <span className="dot" style={{ background: '#f59e0b' }} />{b}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }} className="fade-up delay-4">
                  <Link to="/contact" className="btn btn--primary" style={{ background: 'linear-gradient(135deg, #f59e0b, #ec4899)' }}>
                    Join Waitlist
                  </Link>
                  <Link to="/products" className="btn btn--outline">← All Products</Link>
                </div>
              </div>

              <div className="fade-up delay-2" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                <div className="mini-grid">
                  {SAMPLE_GRID.flat().map((val, idx) => {
                    const key = `${Math.floor(idx/9)}-${idx%9}`
                    return (
                      <div
                        key={idx}
                        className={`cell${val > 0 ? ' given' : ''}${HIGHLIGHT_CELLS.has(key) ? ' highlight' : ''}${CONFLICT_CELLS.has(key) ? ' conflict' : ''}`}
                      >
                        {val > 0 ? val : ''}
                      </div>
                    )
                  })}
                </div>
                <div style={{ fontSize: '0.65rem', letterSpacing: '0.1em', color: 'rgba(120,130,180,0.6)', textTransform: 'uppercase', fontFamily: 'DM Mono' }}>
                  Live match preview
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Abilities */}
      <section className="section" style={{ background: 'rgba(13,18,37,0.5)', borderTop: '1px solid rgba(120,130,180,0.08)' }}>
        <div className="container">
          <div className="game-accent" style={{ marginBottom: '3rem' }}>
            <div className="section-label fade-up">Abilities</div>
            <h2 className="section-title fade-up delay-1" style={{ marginTop: '1rem' }}>
              Unlock your<br /><span>arsenal</span>
            </h2>
          </div>
          <div className="grid-2">
            {ABILITIES.map((a, i) => (
              <div
                key={a.name}
                className={`ability-card ability-card--${a.type} fade-up delay-${i + 1}`}
                onMouseEnter={() => setHoveredAbility(a.name)}
                onMouseLeave={() => setHoveredAbility(null)}
              >
                <div className="ability-card__icon">{a.icon}</div>
                <div className="ability-card__name">{a.name}</div>
                <div className="ability-card__desc">{a.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chaos Events */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
            <div>
              <div className="section-label fade-up" style={{ color: '#ec4899' }}>Chaos Events</div>
              <h2 className="section-title fade-up delay-1" style={{ marginTop: '1rem', marginBottom: '1.5rem', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}>
                Unpredictability<br /><span>is the point</span>
              </h2>
              <p className="section-body fade-up delay-2" style={{ fontSize: '0.875rem' }}>
                Chaos events trigger randomly during matches, affecting all players simultaneously. Master the art of adapting mid-puzzle — because the board you started on won't be the board you finish.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {CHAOS_EVENTS.map((ce, i) => (
                <div key={ce.name} className={`feature-item fade-up delay-${i + 1}`} style={{ background: 'rgba(236,72,153,0.04)', borderColor: 'rgba(236,72,153,0.15)' }}>
                  <div className="feature-item__icon" style={{ background: 'rgba(236,72,153,0.1)', borderColor: 'rgba(236,72,153,0.2)' }}>{ce.icon}</div>
                  <div>
                    <div className="feature-item__title">{ce.name}</div>
                    <div className="feature-item__desc">{ce.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI & Multiplayer */}
      <section className="section" style={{ background: 'rgba(13,18,37,0.5)', borderTop: '1px solid rgba(120,130,180,0.08)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-label fade-up" style={{ justifyContent: 'center', color: '#f59e0b' }}>Game Modes</div>
            <h2 className="section-title fade-up delay-1" style={{ marginTop: '1rem' }}>
              Compete, practice,<br /><span>dominate</span>
            </h2>
          </div>
          <div className="grid-3">
            {[
              { icon: '🤖', title: 'vs AI', desc: 'Face dynamically adapting AI opponents across difficulty tiers. Each AI has unique ability preferences and playstyles.', tag: 'Single Player' },
              { icon: '👥', title: 'vs Players', desc: 'Real-time ranked matches against human opponents. Climb leaderboards and unlock new ability slots.', tag: 'Multiplayer' },
              { icon: '🏟️', title: 'Tournament', desc: 'Structured brackets with prize pools. Chaos events scale with the stakes — final rounds are pure mayhem.', tag: 'Competitive' },
            ].map((m, i) => (
              <div key={m.title} className={`feature-item fade-up delay-${i + 1}`} style={{ flexDirection: 'column', textAlign: 'center', alignItems: 'center' }}>
                <span className="tag tag--amber" style={{ alignSelf: 'center', marginBottom: '1rem' }}>{m.tag}</span>
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{m.icon}</div>
                <div className="feature-item__title">{m.title}</div>
                <div className="feature-item__desc">{m.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
