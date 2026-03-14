import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Products', to: '/products' },
  { label: 'SecuADR', to: '/secuadr' },
  { label: 'Sudoku Shift', to: '/sudoku-shift' },
  { label: 'Arbitrix', to: '/arbitrix' },
  { label: 'About', to: '/about' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    document.body.style.overflow = ''
  }, [location])

  const toggleMenu = () => {
    const next = !menuOpen
    setMenuOpen(next)
    document.body.style.overflow = next ? 'hidden' : ''
  }

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <Link to="/" className="navbar__logo">
        <span className="navbar__logo-name">SADRmind Labs</span>
        <span className="navbar__logo-sub">Technology Studio</span>
      </Link>

      <ul className="navbar__links">
        {NAV_LINKS.map(({ label, to }) => (
          <li key={to}>
            <Link
              to={to}
              className={`navbar__link${location.pathname === to ? ' active' : ''}`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <Link to="/contact" className="btn btn--primary navbar__cta">
        Contact Us
      </Link>

      <button
        className={`navbar__hamburger${menuOpen ? ' open' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>

      <div className={`navbar__mobile${menuOpen ? ' open' : ''}`}>
        {NAV_LINKS.map(({ label, to }) => (
          <Link
            key={to}
            to={to}
            className={`navbar__link${location.pathname === to ? ' active' : ''}`}
          >
            {label}
          </Link>
        ))}
        <Link to="/contact" className="btn btn--primary" style={{ marginTop: '1rem' }}>
          Contact Us
        </Link>
      </div>
    </nav>
  )
}
