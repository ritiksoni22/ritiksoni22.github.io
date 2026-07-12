import SectionHeading from '../SectionHeading/SectionHeading'
import ProjectCard from './ProjectCard'
import projects from '../../data/projects.json'
import './Work.css'

export default function Work() {
  return (
    <section className="section work" id="work">
      <div className="container">
        <SectionHeading>work</SectionHeading>
        <ul className="work__grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </ul>
      </div>
    </section>
  )
}
