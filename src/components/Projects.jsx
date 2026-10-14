import Section from './Section.jsx'
import ProjectCard from './ProjectCard.jsx'
import { projects } from '../data/content.js'

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      intro="Class projects, hackathon work, and ideas. Each card says what it is: some are built, some are concepts."
    >
      <div className="projects-grid">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </Section>
  )
}
