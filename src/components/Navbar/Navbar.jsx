import { useState } from 'react'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import { SOCIAL_LINKS } from '../../data/contact'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a href="#top" className="navbar__brand">
          Ritik Soni
        </a>

        <nav className={`navbar__links ${menuOpen ? 'is-open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <ul className="navbar__socials">
            {SOCIAL_LINKS.map((social) => (
              <li key={social.name}>
                <a href={social.href} target="_blank" rel="noreferrer" aria-label={social.name}>
                  <img src={social.icon} alt="" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
          <button
            type="button"
            className="navbar__burger"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
