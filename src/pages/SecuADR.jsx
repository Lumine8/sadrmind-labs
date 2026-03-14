import React from 'react'
import { Link } from 'react-router-dom'

const FEATURES = [
  { icon: '✋', title: 'Gesture-Based Fallback', desc: 'When passwords fail or are compromised, users authenticate through personalized gesture sequences — drawn patterns unique to each individual.' },
  { icon: '👁️', title: 'Behavioral Verification', desc: 'Continuous background analysis of typing cadence, mouse dynamics, and navigation patterns creates an invisible but robust second layer.' },
  { icon: '🔄', title: 'Adaptive Profiles', desc: 'Machine learning models continuously refine user behavior baselines, reducing false positives over time while tightening security boundaries.' },
  { icon: '⚡', title: 'Zero-Friction Auth', desc: 'Legitimate users experience near-invisible security. Anomalies trigger escalating verification challenges without disrupting normal workflows.' },
  { icon: '🛡️', title: 'Attack Surface Reduction', desc: 'Multi-modal authentication eliminates single-point credential failure. Compromised passwords alone cannot grant access.' },
  { icon: '📊', title: 'Audit & Compliance', desc: 'Full behavioral event logging with cryptographic attestation for enterprise compliance and forensic investigation.' },
]

const STEPS = [
  { num: '01', title: 'Primary Authentication', desc: 'Standard credential entry with optional MFA. Behavioral baseline collection begins silently on first interaction.' },
  { num: '02', title: 'Behavioral Monitoring', desc: 'Session behavior is continuously scored against the user\'s established profile. Anomaly scores are computed in real time.' },
  { num: '03', title: 'Gesture Fallback Trigger', desc: 'On credential failure or high anomaly score, the user is prompted to complete their registered gesture sequence.' },
  { num: '04', title: 'Adaptive Verification', desc: 'The system selects the appropriate challenge level based on risk score — from gentle re-confirmation to full step-up authentication.' },
]

const USE_CASES = [
  { tag: 'Enterprise', title: 'Corporate Identity Management', desc: 'Protect employee accounts across distributed teams without password fatigue.' },
  { tag: 'FinTech', title: 'High-Value Transaction Auth', desc: 'Layer gesture verification on wire transfers and account changes.' },
  { tag: 'Healthcare', title: 'HIPAA-Compliant Access Control', desc: 'Behavioral verification for medical record access with full audit trails.' },
  { tag: 'Platform', title: 'Developer API', desc: 'Integrate SecuADR authentication into any web or mobile application via REST API.' },
]

export default function SecuADR() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero" style={{ paddingTop: '8rem' }}>
        <div className="page-hero__bg">
          <div className="orb orb--1" style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.2), transparent 70%)' }} />
          <div className="orb orb--2" />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-label fade-up">SecuADR Platform</div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '4rem', alignItems: 'center', marginTop: '1rem' }}>
            <div>
              <h1 className="section-title fade-up delay-1" style={{ marginBottom: '1.5rem' }}>
                Authentication that<br /><span>thinks like you do</span>
              </h1>
              <p className="section-body fade-up delay-2">
                SecuADR combines gesture-based fallback login with continuous behavioral verification — creating an adaptive security layer that distinguishes legitimate users from attackers, even when credentials are stolen.
              </p>

              <div className="badge-strip fade-up delay-3">
                {['Gesture Auth', 'Behavioral AI', 'Zero-Trust', 'Enterprise-Ready', 'FIDO2 Compatible'].map(b => (
                  <span key={b} className="badge">
                    <span className="dot" style={{ background: '#a855f7' }} />
                    {b}
                  </span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.5rem' }} className="fade-up delay-4">
                <Link to="/contact" className="btn btn--primary">Request Demo</Link>
                <Link to="/products" className="btn btn--outline">← All Products</Link>
              </div>
            </div>

            <div className="fade-up delay-2" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              <div className="gesture-demo">
                <div className="gesture-demo__ring" />
                <div className="gesture-demo__ring" />
                <div className="gesture-demo__ring" />
                <div className="gesture-demo__center">✋</div>
              </div>
              <div className="terminal" style={{ width: '220px' }}>
                <div className="terminal__bar">
                  <div className="dot" /><div className="dot" /><div className="dot" />
                  <span className="terminal__bar-label">auth.log</span>
                </div>
                <div className="terminal__body" style={{ fontSize: '0.65rem', padding: '0.75rem 1rem' }}>
                  <div className="line-comment">// anomaly score</div>
                  <div><span className="line-key">score</span>: <span className="line-val">0.03</span></div>
                  <div><span className="line-key">status</span>: <span className="line-str">"verified"</span></div>
                  <div><span className="line-key">method</span>: <span className="line-str">"gesture"</span></div>
                  <div><span className="line-key">risk</span>: <span className="line-val">LOW</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="section" style={{ background: 'rgba(13,18,37,0.5)', borderTop: '1px solid rgba(120,130,180,0.08)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
            <div>
              <div className="section-label fade-up">How It Works</div>
              <h2 className="section-title fade-up delay-1" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', marginTop: '1rem', marginBottom: '1rem' }}>
                Four layers of<br /><span>adaptive defense</span>
              </h2>
            </div>
            <div>
              {STEPS.map((s, i) => (
                <div key={s.num} className={`step-item fade-up delay-${i + 1}`}>
                  <div className="step-item__num">{s.num}</div>
                  <div>
                    <div className="step-item__title">{s.title}</div>
                    <div className="step-item__desc">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-label fade-up" style={{ justifyContent: 'center' }}>Features</div>
            <h2 className="section-title fade-up delay-1" style={{ marginTop: '1rem' }}>
              Built for the<br /><span>modern threat landscape</span>
            </h2>
          </div>
          <div className="grid-3">
            {FEATURES.map((f, i) => (
              <div key={f.title} className={`feature-item fade-up delay-${(i % 3) + 1}`} style={{ flexDirection: 'column' }}>
                <div className="feature-item__icon" style={{ marginBottom: '1rem' }}>{f.icon}</div>
                <div className="feature-item__title">{f.title}</div>
                <div className="feature-item__desc">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section" style={{ background: 'rgba(13,18,37,0.5)', borderTop: '1px solid rgba(120,130,180,0.08)' }}>
        <div className="container">
          <div className="section-label fade-up">Use Cases</div>
          <h2 className="section-title fade-up delay-1" style={{ marginTop: '1rem', marginBottom: '3rem' }}>
            Deployed across<br /><span>critical industries</span>
          </h2>
          <div className="grid-2">
            {USE_CASES.map((uc, i) => (
              <div key={uc.title} className={`feature-item fade-up delay-${i + 1}`} style={{ flexDirection: 'column', gap: '0.5rem' }}>
                <span className="tag tag--violet" style={{ alignSelf: 'flex-start' }}>{uc.tag}</span>
                <div className="feature-item__title" style={{ fontSize: '1.1rem' }}>{uc.title}</div>
                <div className="feature-item__desc">{uc.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
