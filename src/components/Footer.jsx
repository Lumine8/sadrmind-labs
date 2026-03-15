import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__grid">
          <div>
            <div className="footer__brand-name">SADRmind Labs</div>
            <p className="footer__brand-desc">
              Building intelligent systems at the intersection of security, AI, finance, and interactive experiences.
            </p>
          </div>

          <div>
            <div className="footer__col-title">Products</div>
            <ul className="footer__col-links">
              <li><Link to="/secuadr">SecuADR</Link></li>
              <li><Link to="/sudoku-shift">Sudoku Shift</Link></li>
              <li><Link to="/arbitrix">Arbitrix</Link></li>
              <li><Link to="/products">All Products</Link></li>
            </ul>
          </div>

          <div>
            <div className="footer__col-title">Company</div>
            <ul className="footer__col-links">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/terms">Terms & Conditions</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/refund-policy">Refund Policy</Link></li>
            </ul>
          </div>

          <div>
            <div className="footer__col-title">Domains</div>
            <ul className="footer__col-links">
              <li><a href="#">Security Systems</a></li>
              <li><a href="#">Artificial Intelligence</a></li>
              <li><a href="#">Financial Automation</a></li>
              <li><a href="#">Game Technology</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span className="footer__copy">
            © {new Date().getFullYear()} SADRmind Labs — A product studio by SANKAR GOPAN.
          </span>
          <div className="footer__social">
            <a href="#" aria-label="Twitter">𝕏</a>
            <a href="#" aria-label="GitHub">⌥</a>
            <a href="#" aria-label="LinkedIn">in</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

