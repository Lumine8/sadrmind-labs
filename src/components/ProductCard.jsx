import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  const { name, tagline, desc, icon, tags, to, accent } = product

  return (
    <Link to={to} style={{ display: 'block' }}>
      <div className={`product-card product-card--${accent} fade-up`}>
        <div className="product-card__header">
          <div className={`product-card__icon product-card__icon--${accent}`}>
            {icon}
          </div>
          <span className="product-card__arrow">↗</span>
        </div>

        <div className="product-card__tags">
          {tags.map(t => (
            <span key={t.label} className={`tag tag--${t.color}`}>
              {t.label}
            </span>
          ))}
        </div>

        <div className="product-card__name">{name}</div>
        <p className="product-card__desc">{desc}</p>

        <span className="product-card__cta">
          Explore {name} <span>→</span>
        </span>
      </div>
    </Link>
  )
}
