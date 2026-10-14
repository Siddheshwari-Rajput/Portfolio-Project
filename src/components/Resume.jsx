import Section from './Section.jsx'
import { resume, profile } from '../data/content.js'

export default function Resume() {
  return (
    <Section id="resume" title="Resume">
      <div className="resume-grid">
        <div>
          <h3>Career objective</h3>
          <p>{resume.objective}</p>

          <h3>Education</h3>
          {resume.education.map((e) => (
            <div key={e.title} className="entry">
              <p className="entry-title">{e.title}</p>
              <p className="muted">
                {e.place}, {e.period}
              </p>
            </div>
          ))}

          <a
            className="btn btn-primary"
            href={`${import.meta.env.BASE_URL}${profile.resumeFile}`}
            download
          >
            Download resume
          </a>
        </div>

        <div>
          <h3>Activities and achievements</h3>
          <ul className="timeline">
            {resume.activities.map((a) => (
              <li key={a.title}>
                <p className="entry-title">{a.title}</p>
                <p className={a.text.startsWith('[') ? 'placeholder' : 'muted'}>{a.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
