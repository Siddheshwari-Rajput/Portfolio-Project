import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import { about, profile } from '../data/content.js'

export default function About() {
  return (
    <Section id="about" title="About me">
      <Reveal className="about-grid">
        <div className="blob-wrap">
          <img
            className="blob"
            src={`${import.meta.env.BASE_URL}${profile.photo}`}
            alt={`Portrait of ${profile.name}`}
            width="380"
            height="380"
            loading="lazy"
          />
        </div>
        <div className="about-copy">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <p className="goal">
            <span className="note">My goal</span>
            {about.goal}
          </p>
          <dl className="facts">
            {about.facts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>
    </Section>
  )
}
