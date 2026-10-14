import Reveal from './Reveal.jsx'
import ExtLink from './ExtLink.jsx'
import SosDemo from './SosDemo.jsx'

const isPlaceholder = (s) => s.startsWith('[')

function Flow({ steps, tone }) {
  return (
    <ol className={`flow flow-${tone}`}>
      {steps.map((s) => (
        <li key={s}>{s}</li>
      ))}
    </ol>
  )
}

export default function ProjectCard({ project }) {
  const p = project
  return (
    <Reveal className={`project card ${p.featured ? 'project-featured' : ''}`}>
      <p className="project-kind">{p.kind}</p>
      <h3>{p.title}</h3>
      <p>{p.summary}</p>

      {p.flow && (
        <div className="flow-wrap">
          <p className="flow-label">Before</p>
          <Flow steps={p.flow.before} tone="before" />
          <p className="flow-label">With our platform</p>
          <Flow steps={p.flow.after} tone="after" />
        </div>
      )}

      {p.points.length > 0 && (
        <ul className="points">
          {p.points.map((pt) => (
            <li key={pt}>{pt}</li>
          ))}
        </ul>
      )}

      {p.role && (
        <p className="project-role">
          <span className="note">My role</span>
          <span className={isPlaceholder(p.role) ? 'placeholder' : ''}>{p.role}</span>
        </p>
      )}

      {p.sosDemo && <SosDemo />}

      <ul className="chips" aria-label="Technologies">
        {p.tags.map((t) => (
          <li key={t} className={isPlaceholder(t) ? 'placeholder' : ''}>
            {t}
          </li>
        ))}
      </ul>

      <div className="project-links">
        <ExtLink href={p.github} label="GitHub" missing="[GitHub link]" />
        <ExtLink href={p.demo} label="Live demo" missing="[Live demo link]" />
      </div>
    </Reveal>
  )
}
