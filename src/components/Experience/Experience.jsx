import SectionHeading from '../SectionHeading/SectionHeading'
import ExperienceItem from './ExperienceItem'
import experiences from '../../data/experiences.json'
import './Experience.css'

export default function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="container">
        <SectionHeading>experience</SectionHeading>
        <ul className="experience__list">
          {experiences.map((experience) => (
            <ExperienceItem
              key={`${experience.org}-${experience.timePeriod}`}
              experience={experience}
            />
          ))}
        </ul>
      </div>
    </section>
  )
}
