import React from 'react'
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
const HIGHLIGHT = new Set(['0-4','1-3','1-4','1-5','2-4'])
const CONFLICT  = new Set(['3-4','4-4','5-4','8-4'])

const ABILITIES = [
  { type: 'fire',      icon: '🔥', name: 'Inferno Strike', desc: 'Lock a row for your opponent for 30 seconds — they cannot place numbers.' },
  { type: 'ice',       icon: '❄️', name: 'Freeze Frame',   desc: 'Pause your own timer for 15 seconds to think without penalty.' },
  { type: 'lightning', icon: '⚡', name: 'Volt Reveal',    desc: 'Automatically reveal the correct number for one cell of your choice.' },
  { type: 'chaos',     icon: '🌀', name: 'Chaos Shuffle',  desc: "Randomly scramble two rows in your opponent's board, keeping logical validity." },
]

const CHAOS_EVENTS = [
  { icon: '💥', name: 'Cell Blackout',  desc: '3 random cells hidden from both players for 20 seconds.' },
  { icon: '🔄', name: 'Board Mirror',   desc: 'The entire board is flipped horizontally for 10 seconds.' },
  { icon: '⏩', name: 'Speed Surge',    desc: 'All timers run at 2× speed for the next 45 seconds.' },
  { icon: '🌊', name: 'Cascade Fill',   desc: 'One random correct answer is auto-filled for everyone simultaneously.' },
]

const GAME_MODES = [
  { icon: '🤖', title: 'vs AI',       tag: 'Single Player', desc: 'Face dynamically adapting AI opponents across difficulty tiers. Each AI has unique ability preferences and playstyles.' },
  { icon: '👥', title: 'vs Players',  tag: 'Multiplayer',   desc: 'Real-time ranked matches against human opponents. Climb leaderboards and unlock new ability slots.' },
  { icon: '🏟️', title: 'Tournament',  tag: 'Competitive',   desc: 'Structured brackets with prize pools. Chaos events scale with the stakes — final rounds are pure mayhem.' },
]

export default function SudokuShift() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="page-hero">
        <div className="page-hero__bg">
          <div className="orb orb--1" style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.16), transparent 70%)' }} />
          <div className="orb orb--2" style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.11), transparent 70%)' }} />
        </div>
        <div className="container">
          <div className="game-accent">
            <div className="section-label fade-up">Sudoku Shift</div>
            <div className="sudoku-hero-split">
              <div>
                <h1 className="section-title fade-up delay-1" style={{ marginBottom: '1.5rem' }}>
                  Sudoku. Evolved.<br /><span>Weaponised.</span>
                </h1>
                <p className="section-body fade-up delay-2">
                  The classic puzzle, reimagined as a competitive battlefield. Wield special abilities,
                  survive chaos events, and outthink AI opponents and real players in fast-paced puzzle combat.
                </p>
                <div className="badge-strip fade-up delay-3">
                  {['Multiplayer','AI Opponents','Chaos Events','Abilities','Ranked Mode'].map(b => (
                    <span key={b} className="badge">
                      <span className="dot" style={{ background: '#f59e0b' }} />{b}
                    </span>
                  ))}
                </div>
                <div className="sudoku-hero-actions fade-up delay-4">
                  <Link to="/contact" className="btn btn--primary"
                    style={{ background: 'linear-gradient(135deg,#d97706,#db2777)' }}>
                    Join Waitlist
                  </Link>
                  <Link to="/products" className="btn btn--outline">← All Products</Link>
                </div>
              </div>

              <div className="sudoku-grid-preview fade-up delay-2">
                <div className="mini-grid">
                  {SAMPLE_GRID.flat().map((val, idx) => {
                    const key = `${Math.floor(idx / 9)}-${idx % 9}`
                    return (
                      <div key={idx} className={[
                        'cell',
                        val > 0 ? 'given' : '',
                        HIGHLIGHT.has(key) ? 'highlight' : '',
                        CONFLICT.has(key)  ? 'conflict'  : '',
                      ].join(' ').trim()}>
                        {val > 0 ? val : ''}
                      </div>
                    )
                  })}
                </div>
                <div className="grid-caption">Live match preview</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Abilities ────────────────────────────────── */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-header game-accent">
            <div className="section-label fade-up">Abilities</div>
            <h2 className="section-title fade-up delay-1" style={{ marginTop: '1rem' }}>
              Unlock your<br /><span>arsenal</span>
            </h2>
          </div>
          <div className="grid-2">
            {ABILITIES.map((a, i) => (
              <div key={a.name} className={`ability-card ability-card--${a.type} fade-up delay-${i + 1}`}>
                <div className="ability-card__icon">{a.icon}</div>
                <div className="ability-card__name">{a.name}</div>
                <div className="ability-card__desc">{a.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Chaos Events ─────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="split">
            <div>
              <div className="section-label fade-up" style={{ color: '#ec4899' }}>Chaos Events</div>
              <h2 className="section-title fade-up delay-1" style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
                Unpredictability<br />
                <span style={{ background: 'linear-gradient(135deg,#f59e0b,#ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  is the point
                </span>
              </h2>
              <p className="section-body fade-up delay-2">
                Chaos events trigger randomly during matches, affecting all players simultaneously.
                Master the art of adapting mid-puzzle — because the board you started on won't be
                the board you finish.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {CHAOS_EVENTS.map((ce, i) => (
                <div key={ce.name} className={`feature-item fade-up delay-${i + 1}`}
                  style={{ borderColor: 'rgba(236,72,153,0.13)', background: 'rgba(236,72,153,0.03)' }}>
                  <div className="feature-item__icon"
                    style={{ background: 'rgba(236,72,153,0.08)', borderColor: 'rgba(236,72,153,0.18)' }}>
                    {ce.icon}
                  </div>
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

      {/* ── Game Modes ───────────────────────────────── */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-header section-header--center game-accent">
            <div className="section-label fade-up" style={{ justifyContent: 'center' }}>Game Modes</div>
            <h2 className="section-title fade-up delay-1" style={{ marginTop: '1rem' }}>
              Compete, practice,<br /><span>dominate</span>
            </h2>
          </div>
          <div className="grid-3">
            {GAME_MODES.map((m, i) => (
              <div key={m.title} className={`feature-item fade-up delay-${i + 1}`}
                style={{ flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <span className="tag tag--amber" style={{ marginBottom: '1rem' }}>{m.tag}</span>
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
