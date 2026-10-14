import { useState } from 'react'
import { profile } from '../data/content.js'

const links = [
  ['about', 'About'],
  ['skills', 'Skills'],
  ['projects', 'Projects'],
  ['resume', 'Resume'],
  ['contact', 'Contact'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="brand" onClick={close}>
          {profile.name}
        </a>
        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
        <nav aria-label="Primary">
          <ul id="nav-links" className={`nav-links ${open ? 'is-open' : ''}`}>
            {links.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} onClick={close}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
