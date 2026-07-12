import SectionHeading from '../SectionHeading/SectionHeading'
import ProjectCard from './ProjectCard'
import projectGroups from '../../data/projects.json'
import './Projects.css'

const GROUPS = [
  { key: 'professional', title: 'Professional' },
  { key: 'personal', title: 'Personal' },
]

export default function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="container">
        <SectionHeading>projects</SectionHeading>
        {GROUPS.map(({ key, title }) => {
          const items = projectGroups[key] || []
          if (!items.length) return null

          return (
            <div className="projects__group" key={key}>
              <h3 className="projects__group-title">{title}</h3>
              <ul className="projects__grid">
                {items.map((project, index) => (
                  <ProjectCard key={project.name} project={project} index={index} />
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </section>
  )
}
