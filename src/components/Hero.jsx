import { profile, codechef } from '../data/content.js'
import useTypewriter from '../hooks/useTypewriter.js'

export default function Hero() {
  const typed = useTypewriter(profile.typewriterRoles)

  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      {/* Decorative SOS radar: pulsing rings and a slow sweep. Hidden from assistive tech. */}
      <div className="radar" aria-hidden="true">
        <span className="radar-ring r1" />
        <span className="radar-ring r2" />
        <span className="radar-ring r3" />
        <span className="radar-sweep" />
        <span className="radar-dot" />
      </div>

      <div className="container hero-inner">
        <p className="hero-hello">Hi, I'm</p>
        <h1 id="hero-title">{profile.name}</h1>
        <p className="hero-type" aria-label={profile.typewriterRoles.join(', ')}>
          <span aria-hidden="true">
            {typed}
            <span className="caret" />
          </span>
        </p>
        <p className="hero-tagline">{profile.tagline}</p>
        <p className="hero-role">{profile.role}</p>

        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects">View projects</a>
          <a
            className="btn btn-ghost"
            href={`${import.meta.env.BASE_URL}${profile.resumeFile}`}
            download
          >
            Download resume
          </a>
          <a className="btn btn-ghost" href="#contact">Contact me</a>
        </div>

        <dl className="hero-stat">
          <dt>{codechef.label}</dt>
          <dd>{codechef.rating}</dd>
        </dl>
      </div>
    </section>
  )
}
