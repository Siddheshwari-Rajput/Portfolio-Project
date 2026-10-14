import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import ExtLink from './ExtLink.jsx'
import { skillGroups, codechef, profile } from '../data/content.js'

export default function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      intro="What I work with today. I'm a beginner who learns by building."
    >
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <Reveal key={group.title} className="card">
            <h3>{group.title}</h3>
            <ul className="chips">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        ))}

        <Reveal className="card card-accent">
          <h3>Competitive coding</h3>
          <p className="big-number">{codechef.rating}</p>
          <p className="muted">{codechef.label}</p>
          <ExtLink
            href={profile.links.codechef}
            label="View CodeChef profile"
            missing="[CodeChef profile link]"
          />
        </Reveal>
      </div>
    </Section>
  )
}
