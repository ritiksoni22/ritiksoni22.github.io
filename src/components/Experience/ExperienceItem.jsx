export default function ExperienceItem({ experience }) {
  const { org, designation, link, timePeriod, desc, skills } = experience

  return (
    <li className="experience-item">
      <div className="experience-item__marker" aria-hidden="true" />
      <div className="experience-item__body">
        <p className="experience-item__period">{timePeriod}</p>
        <h3 className="experience-item__title">
          {designation} ·{' '}
          <a href={link} target="_blank" rel="noreferrer">
            {org}
          </a>
        </h3>
        <p className="experience-item__desc">{desc}</p>
        <ul className="experience-item__skills">
          {skills.map((skill) => (
            <li key={skill} className="pill">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}
