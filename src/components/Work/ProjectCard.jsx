export default function ProjectCard({ project, index }) {
  const { name, desc, skills } = project

  return (
    <li className="project-card">
      <div className={`project-card__visual project-card__visual--${index % 4}`}>
        <span>{name.charAt(0)}</span>
      </div>
      <h3 className="project-card__title">{name}</h3>
      <p className="project-card__desc">{desc}</p>
      <ul className="project-card__skills">
        {skills.map((skill) => (
          <li key={skill} className="pill">
            {skill}
          </li>
        ))}
      </ul>
    </li>
  )
}
