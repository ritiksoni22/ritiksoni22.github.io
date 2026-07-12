export default function ProjectCard({ project, index }) {
  const { name, desc, skills, url, thumbnail } = project
  const Wrapper = url ? 'a' : 'div'
  const linkProps = url ? { href: url, target: '_blank', rel: 'noreferrer' } : {}
  const hasThumbnail = thumbnail?.startsWith('/')

  return (
    <li className="project-card">
      <Wrapper
        className={`project-card__inner${url ? ' project-card__inner--link' : ''}`}
        {...linkProps}
      >
        <div className={`project-card__visual project-card__visual--${index % 4}`}>
          {hasThumbnail
            ? <img src={thumbnail} alt="" className="project-card__thumbnail" />
            : <span>{name.charAt(0)}</span>
          }
        </div>
        <h3 className="project-card__title">
          {name}
          {url && (
            <span className="project-card__link-icon" aria-hidden="true">
              ↗
            </span>
          )}
        </h3>
        <p className="project-card__desc">{desc}</p>
        <ul className="project-card__skills">
          {skills.map((skill) => (
            <li key={skill} className="pill">
              {skill}
            </li>
          ))}
        </ul>
      </Wrapper>
    </li>
  )
}
