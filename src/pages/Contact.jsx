import React, { useState } from 'react'

const INITIAL = { name: '', email: '', message: '' }
const INITIAL_ERRORS = { name: '', email: '', message: '' }

function validate(fields) {
  const errors = { ...INITIAL_ERRORS }
  if (!fields.name.trim()) errors.name = 'Name is required.'
  else if (fields.name.trim().length < 2) errors.name = 'Name must be at least 2 characters.'

  if (!fields.email.trim()) errors.email = 'Email is required.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) errors.email = 'Please enter a valid email address.'

  if (!fields.message.trim()) errors.message = 'Message is required.'
  else if (fields.message.trim().length < 20) errors.message = 'Message must be at least 20 characters.'

  return errors
}

function hasErrors(errors) {
  return Object.values(errors).some(e => e !== '')
}

export default function Contact() {
  const [fields, setFields]   = useState(INITIAL)
  const [errors, setErrors]   = useState(INITIAL_ERRORS)
  const [touched, setTouched] = useState({ name: false, email: false, message: false })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]     = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    const next = { ...fields, [name]: value }
    setFields(next)
    if (touched[name]) {
      setErrors(validate(next))
    }
  }

  const handleBlur = (e) => {
    const { name } = e.target
    setTouched(t => ({ ...t, [name]: true }))
    setErrors(validate(fields))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const allTouched = { name: true, email: true, message: true }
    setTouched(allTouched)
    const errs = validate(fields)
    setErrors(errs)
    if (hasErrors(errs)) return

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1400)
  }

  const CONTACT_INFO = [
    { icon: '📍', label: 'Studio', value: 'Remote-first, globally distributed' },
    { icon: '📬', label: 'Email', value: 'hello@sadrmindlabs.dev' },
    { icon: '⏱️', label: 'Response time', value: 'Within 48 hours' },
  ]

  return (
    <>
      {/* Hero */}
      <section className="page-hero" style={{ paddingTop: '8rem', paddingBottom: '3rem' }}>
        <div className="page-hero__bg">
          <div className="orb orb--1" />
          <div className="orb orb--2" />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-label fade-up">Get In Touch</div>
          <h1 className="section-title fade-up delay-1" style={{ marginTop: '1rem', marginBottom: '1rem' }}>
            Let's build something<br /><span>remarkable together</span>
          </h1>
          <p className="section-body fade-up delay-2">
            Whether you're interested in our products, want to discuss research collaboration, or just want to say hello — we read every message.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '5rem', alignItems: 'start' }}>

            {/* Left: info */}
            <div>
              <div className="section-label fade-up">Contact Details</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '1.5rem' }}>
                {CONTACT_INFO.map((item, i) => (
                  <div key={item.label} className={`fade-up delay-${i + 1}`}
                    style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: 8, flexShrink: 0,
                      background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.2)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem',
                    }}>
                      {item.icon}
                    </div>
                    <div>
                      <div style={{ fontFamily: 'DM Mono', fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(120,130,180,0.6)', marginBottom: '0.25rem' }}>{item.label}</div>
                      <div style={{ fontSize: '0.9rem', color: '#f0f4ff' }}>{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'rgba(13,18,37,0.8)', border: '1px solid rgba(120,130,180,0.1)', borderRadius: 12 }}>
                <div style={{ fontFamily: 'DM Mono', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(120,130,180,0.5)', marginBottom: '0.75rem' }}>
                  What to include
                </div>
                {[
                  'Which product(s) you're interested in',
                  'Your use case or research context',
                  'Any collaboration or partnership ideas',
                ].map((tip, i) => (
                  <div key={i} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', marginBottom: '0.6rem', fontSize: '0.82rem', color: 'rgba(136,146,176,0.8)', lineHeight: 1.5 }}>
                    <span style={{ color: '#a855f7', marginTop: '0.1rem', flexShrink: 0 }}>→</span>
                    {tip}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: form */}
            <div className="fade-up delay-2">
              {submitted ? (
                <div className="contact-form__success">
                  <div className="icon">✅</div>
                  <h3>Message received</h3>
                  <p>Thanks for reaching out. We'll get back to you within 48 hours.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  <div className="contact-form__group">
                    <label className="contact-form__label" htmlFor="name">Full Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className={`contact-form__input${errors.name && touched.name ? ' error' : ''}`}
                      placeholder="Your name"
                      value={fields.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="name"
                    />
                    {errors.name && touched.name && (
                      <span className="contact-form__error">{errors.name}</span>
                    )}
                  </div>

                  <div className="contact-form__group">
                    <label className="contact-form__label" htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className={`contact-form__input${errors.email && touched.email ? ' error' : ''}`}
                      placeholder="you@example.com"
                      value={fields.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="email"
                    />
                    {errors.email && touched.email && (
                      <span className="contact-form__error">{errors.email}</span>
                    )}
                  </div>

                  <div className="contact-form__group">
                    <label className="contact-form__label" htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      className={`contact-form__textarea${errors.message && touched.message ? ' error' : ''}`}
                      placeholder="Tell us what you're working on, what you need, or just say hi..."
                      value={fields.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.message && touched.message && (
                      <span className="contact-form__error">{errors.message}</span>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="btn btn--primary contact-form__submit"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span style={{ display: 'inline-block', width: 14, height: 14, border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', borderRadius: '50%', animation: 'spin 0.6s linear infinite' }} />
                        Sending…
                      </>
                    ) : (
                      <>Send Message <span className="arrow">→</span></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
