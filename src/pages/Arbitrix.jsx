import React from 'react'
import { Link } from 'react-router-dom'

const ARCH_NODES = [
  { icon: '📡', title: 'Market Data Feed', desc: 'Real-time + historical OHLCV ingestion' },
  { icon: '🧠', title: 'RL Engine', desc: 'Policy gradient & Q-learning agents' },
  { icon: '📊', title: 'Research Console', desc: 'Strategy analysis & backtesting' },
  { icon: '⚙️', title: 'Adaptive Strategies', desc: 'Self-tuning parameter optimization' },
  { icon: '🔬', title: 'Simulation Layer', desc: 'Monte Carlo scenario generation' },
  { icon: '📈', title: 'Performance Tracker', desc: 'Sharpe, drawdown, regime metrics' },
]

const RESEARCH_FOCUS = [
  {
    tag: 'Reinforcement Learning',
    title: 'RL-Based Strategy Discovery',
    desc: 'Agents trained on simulated market environments learn to discover non-obvious entry and exit signals through reward optimization rather than human-defined rules.',
  },
  {
    tag: 'Adaptive Systems',
    title: 'Regime Detection & Switching',
    desc: 'Automatic identification of market regimes (trending, ranging, volatile) triggers strategy parameter adjustments in real time, eliminating manual model rotation.',
  },
  {
    tag: 'Risk Management',
    title: 'Dynamic Risk Allocation',
    desc: 'Position sizing and exposure limits are determined by learned risk models rather than fixed percentages — adapting to volatility clustering and drawdown patterns.',
  },
  {
    tag: 'Research Infrastructure',
    title: 'Hypothesis-Driven Backtesting',
    desc: 'A structured research framework that separates strategy ideation from parameter optimization, reducing overfitting through walk-forward validation pipelines.',
  },
]

export default function Arbitrix() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero" style={{ paddingTop: '8rem' }}>
        <div className="page-hero__bg">
          <div className="orb orb--1" style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.15), transparent 70%)' }} />
          <div className="orb orb--2" style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.12), transparent 70%)' }} />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-label fade-up" style={{ color: '#10b981' }}>Arbitrix Platform</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '4rem', alignItems: 'center', marginTop: '1rem' }}>
            <div>
              <h1 className="section-title fade-up delay-1" style={{ marginBottom: '1.5rem' }}>
                Markets as a<br /><span style={{ background: 'linear-gradient(135deg, #10b981, #38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>learning environment</span>
              </h1>
              <p className="section-body fade-up delay-2">
                Arbitrix is a research platform that treats financial markets as sequential decision problems. Reinforcement learning agents explore, fail, and adapt — surfacing strategies that rule-based systems miss.
              </p>

              <div className="badge-strip fade-up delay-3">
                {['RL Agents', 'Backtesting', 'Regime Detection', 'Monte Carlo', 'Live Paper Trading'].map(b => (
                  <span key={b} className="badge">
                    <span className="dot" style={{ background: '#10b981' }} />{b}
                  </span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }} className="fade-up delay-4">
                <Link to="/contact" className="btn btn--primary" style={{ background: 'linear-gradient(135deg, #059669, #0891b2)' }}>
                  Request Access
                </Link>
                <Link to="/products" className="btn btn--outline">← All Products</Link>
              </div>
            </div>

            <div className="fade-up delay-2">
              <div className="terminal" style={{ width: '260px' }}>
                <div className="terminal__bar">
                  <div className="dot" /><div className="dot" /><div className="dot" />
                  <span className="terminal__bar-label">arbitrix.py</span>
                </div>
                <div className="terminal__body">
                  <div className="line-comment"># Initialize RL agent</div>
                  <div><span className="line-key">agent</span> = <span className="line-str">PPOAgent</span>(</div>
                  <div style={{ paddingLeft: '1rem' }}><span className="line-key">obs_space</span>=market,</div>
                  <div style={{ paddingLeft: '1rem' }}><span className="line-key">gamma</span>=<span className="line-val">0.99</span>,</div>
                  <div style={{ paddingLeft: '1rem' }}><span className="line-key">adaptive</span>=<span className="line-val">True</span></div>
                  <div>)</div>
                  <div style={{ marginTop: '0.5rem' }} className="line-comment"># Sharpe: 1.84 ↑</div>
                  <div><span className="line-key">status</span>: <span className="line-str">"LIVE"</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section" style={{ background: 'rgba(13,18,37,0.5)', borderTop: '1px solid rgba(120,130,180,0.08)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <div className="section-label fade-up" style={{ color: '#10b981' }}>Overview</div>
              <h2 className="section-title fade-up delay-1" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', marginTop: '1rem', marginBottom: '1.5rem' }}>
                Beyond rule-based<br /><span style={{ background: 'linear-gradient(135deg, #10b981, #38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>trading systems</span>
              </h2>
              <p className="section-body fade-up delay-2" style={{ fontSize: '0.9rem' }}>
                Traditional algorithmic trading relies on human-defined signals and rigid rules. Arbitrix takes a different approach: agents are trained to discover their own signals through environment interaction — producing strategies that are fundamentally adaptive rather than brittle.
              </p>
              <p className="section-body fade-up delay-3" style={{ fontSize: '0.9rem', marginTop: '1rem' }}>
                The platform provides research infrastructure, not black-box execution — giving researchers full visibility into agent decision processes, strategy attribution, and performance decomposition.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} className="fade-up delay-2">
              {[
                { label: 'Avg. Backtest Sharpe', value: '1.8 – 2.4' },
                { label: 'Supported Markets', value: 'Equities, Crypto, FX' },
                { label: 'Agent Architectures', value: 'PPO, SAC, DQN, A3C' },
                { label: 'Simulation Granularity', value: 'Tick-level replay' },
              ].map(s => (
                <div key={s.label} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '1rem 1.25rem',
                  background: 'rgba(13,18,37,0.8)',
                  border: '1px solid rgba(16,185,129,0.15)',
                  borderRadius: '8px',
                }}>
                  <span style={{ fontFamily: 'DM Mono', fontSize: '0.72rem', color: 'rgba(120,130,180,0.7)', letterSpacing: '0.08em' }}>{s.label}</span>
                  <span style={{ fontFamily: 'Syne', fontWeight: 700, color: '#10b981' }}>{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-label fade-up" style={{ justifyContent: 'center', color: '#10b981' }}>Architecture</div>
            <h2 className="section-title fade-up delay-1" style={{ marginTop: '1rem' }}>
              Research-grade<br /><span style={{ background: 'linear-gradient(135deg, #10b981, #38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>infrastructure</span>
            </h2>
          </div>
          <div className="arch-diagram">
            {ARCH_NODES.map((n, i) => (
              <div key={n.title} className={`arch-diagram__node fade-up delay-${(i % 3) + 1}`}
                style={{ borderColor: 'rgba(16,185,129,0.12)' }}>
                <div className="node-icon">{n.icon}</div>
                <div className="node-title">{n.title}</div>
                <div className="node-desc">{n.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Focus */}
      <section className="section" style={{ background: 'rgba(13,18,37,0.5)', borderTop: '1px solid rgba(120,130,180,0.08)' }}>
        <div className="container">
          <div className="section-label fade-up" style={{ color: '#10b981' }}>Research Focus</div>
          <h2 className="section-title fade-up delay-1" style={{ marginTop: '1rem', marginBottom: '3rem' }}>
            Where we're pushing<br /><span style={{ background: 'linear-gradient(135deg, #10b981, #38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>the frontier</span>
          </h2>
          <div className="grid-2">
            {RESEARCH_FOCUS.map((r, i) => (
              <div key={r.title} className={`feature-item fade-up delay-${i + 1}`} style={{ flexDirection: 'column', borderColor: 'rgba(16,185,129,0.12)' }}>
                <span className="tag tag--green" style={{ alignSelf: 'flex-start', marginBottom: '0.75rem' }}>{r.tag}</span>
                <div className="feature-item__title" style={{ fontSize: '1.05rem' }}>{r.title}</div>
                <div className="feature-item__desc">{r.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
