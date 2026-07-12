import SectionHeading from '../SectionHeading/SectionHeading'
import skillGroups from '../../data/skills.json'
import { getSkillIcon } from './iconMap'
import './Skills.css'

export default function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="container">
        <SectionHeading>skills</SectionHeading>
        <div className="skills__groups">
          {skillGroups.map((group) => (
            <div className="skills__group" key={group.type}>
              <h3 className="skills__group-title">{group.type}</h3>
              <ul className="skills__list">
                {group.list.map((skill) => {
                  const icon = getSkillIcon(skill)
                  return (
                    <li key={skill} className="pill">
                      {icon && <img src={icon} alt="" aria-hidden="true" />}
                      {skill}
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
