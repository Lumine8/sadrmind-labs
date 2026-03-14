import React from 'react'
import { Link } from 'react-router-dom'

const ARCH_NODES = [
  { icon: '📡', title: 'Market Data Feed',  desc: 'Real-time + historical OHLCV ingestion' },
  { icon: '🧠', title: 'RL Engine',         desc: 'Policy gradient & Q-learning agents' },
  { icon: '📊', title: 'Research Console',  desc: 'Strategy analysis & backtesting' },
  { icon: '⚙️', title: 'Adaptive Strategy', desc: 'Self-tuning parameter optimization' },
  { icon: '🔬', title: 'Simulation Layer',  desc: 'Monte Carlo scenario generation' },
  { icon: '📈', title: 'Perf. Tracker',     desc: 'Sharpe, drawdown, regime metrics' },
]

const KV_ROWS = [
  { key: 'Avg. Backtest Sharpe',    val: '1.8 – 2.4' },
  { key: 'Supported Markets',       val: 'Equities · Crypto · FX' },
  { key: 'Agent Architectures',     val: 'PPO · SAC · DQN · A3C' },
  { key: 'Simulation Granularity',  val: 'Tick-level replay' },
]

const RESEARCH = [
  {
    tag: 'Reinforcement Learning',
    title: 'RL-Based Strategy Discovery',
    desc: 'Agents trained on simulated market environments learn to discover non-obvious entry and exit signals through reward optimisation rather than human-defined rules.',
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
    desc: 'A structured research framework that separates strategy ideation from parameter optimisation, reducing overfitting through walk-forward validation pipelines.',
  },
]

export default function Arbitrix() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────── */}
      <section className="page-hero">
        <div className="page-hero__bg">
          <div className="orb orb--1" style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.18), transparent 70%)' }} />
          <div className="orb orb--2" style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.14), transparent 70%)' }} />
        </div>
        <div className="container arbitrix-hero-inner">
          <div className="section-label fade-up" style={{ color: '#10b981' }}>Arbitrix Platform</div>

          <div className="split arbitrix-hero-split">
            <div>
              <h1 className="section-title fade-up delay-1" style={{ marginBottom: '1.5rem' }}>
                Markets as a<br />
                <span style={{ background: 'linear-gradient(135deg, #10b981, #38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  learning environment
                </span>
              </h1>
              <p className="section-body fade-up delay-2">
                Arbitrix treats financial markets as sequential decision problems. Reinforcement
                learning agents explore, fail, and adapt — surfacing strategies that rule-based
                systems systematically miss.
              </p>
              <div className="badge-strip fade-up delay-3">
                {['RL Agents','Backtesting','Regime Detection','Monte Carlo','Paper Trading'].map(b => (
                  <span key={b} className="badge">
                    <span className="dot" style={{ background: '#10b981' }} />{b}
                  </span>
                ))}
              </div>
              <div className="arbitrix-hero-actions fade-up delay-4">
                <Link to="/contact" className="btn btn--primary" style={{ background: 'linear-gradient(135deg,#059669,#0891b2)' }}>
                  Request Access
                </Link>
                <Link to="/products" className="btn btn--outline">← All Products</Link>
              </div>
            </div>

            <div className="fade-up delay-2">
              <div className="terminal">
                <div className="terminal__bar">
                  <div className="dot" /><div className="dot" /><div className="dot" />
                  <span className="terminal__bar-label">arbitrix_agent.py</span>
                </div>
                <div className="terminal__body">
                  <div className="line-comment"># Initialise RL agent</div>
                  <div><span className="line-key">agent</span> = <span className="line-str">PPOAgent</span>(</div>
                  <div style={{ paddingLeft: '1.25rem' }}><span className="line-key">obs_space</span>=market,</div>
                  <div style={{ paddingLeft: '1.25rem' }}><span className="line-key">gamma</span>=<span className="line-val">0.99</span>,</div>
                  <div style={{ paddingLeft: '1.25rem' }}><span className="line-key">adaptive</span>=<span className="line-val">True</span>,</div>
                  <div style={{ paddingLeft: '1.25rem' }}><span className="line-key">regime</span>=<span className="line-str">"auto"</span></div>
                  <div>)</div>
                  <div style={{ marginTop: '0.5rem' }}><span className="line-comment"># sharpe: 1.84 ↑  drawdown: 6.2%</span></div>
                  <div><span className="line-key">status</span>: <span className="line-str">"LIVE_PAPER"</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Overview ──────────────────────────────────── */}
      <section className="section section--alt">
        <div className="container">
          <div className="split">
            <div>
              <div className="section-header">
                <div className="section-label" style={{ color: '#10b981' }}>Overview</div>
                <h2 className="section-title" style={{ marginTop: '1rem' }}>
                  Beyond rule-based<br />
                  <span style={{ background: 'linear-gradient(135deg,#10b981,#38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    trading systems
                  </span>
                </h2>
              </div>
              <p className="section-body fade-up" style={{ marginBottom: '1rem' }}>
                Traditional algorithmic trading relies on human-defined signals and rigid rules.
                Arbitrix takes a different approach: agents are trained to discover their own
                signals through environment interaction.
              </p>
              <p className="section-body fade-up delay-1">
                The platform provides research infrastructure, not a black box — giving researchers
                full visibility into agent decisions, strategy attribution, and performance decomposition.
              </p>
            </div>

            <div className="kv-table fade-up delay-2">
              {KV_ROWS.map(row => (
                <div key={row.key} className="kv-table__row">
                  <span className="kv-table__row-key">{row.key}</span>
                  <span className="kv-table__row-val">{row.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Architecture ──────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="section-header section-header--center">
            <div className="section-label fade-up" style={{ color: '#10b981', justifyContent: 'center' }}>Architecture</div>
            <h2 className="section-title fade-up delay-1" style={{ marginTop: '1rem' }}>
              Research-grade<br />
              <span style={{ background: 'linear-gradient(135deg,#10b981,#38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                infrastructure
              </span>
            </h2>
          </div>

          <div className="arch-diagram">
            {ARCH_NODES.map((n, i) => (
              <div key={n.title} className={`arch-diagram__node fade-up delay-${(i % 3) + 1}`}
                style={{ borderColor: 'rgba(16,185,129,0.1)' }}>
                <div className="node-icon">{n.icon}</div>
                <div className="node-title">{n.title}</div>
                <div className="node-desc">{n.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Research Focus ────────────────────────────── */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-header">
            <div className="section-label fade-up" style={{ color: '#10b981' }}>Research Focus</div>
            <h2 className="section-title fade-up delay-1" style={{ marginTop: '1rem' }}>
              Where we're pushing<br />
              <span style={{ background: 'linear-gradient(135deg,#10b981,#38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                the frontier
              </span>
            </h2>
          </div>

          <div className="grid-2">
            {RESEARCH.map((r, i) => (
              <div key={r.title} className={`feature-item fade-up delay-${i + 1}`}
                style={{ flexDirection: 'column', borderColor: 'rgba(16,185,129,0.1)' }}>
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
