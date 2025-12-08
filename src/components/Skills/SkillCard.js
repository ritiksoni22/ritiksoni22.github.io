const SkillCard = ({ skill }) => {
  return (
    <div className="skill-card">
      <h3>{skill.type}</h3>
      <div className="skill-tags">
        {skill.list.map((item, i) => <div key={i}>{item}</div>)}
      </div>
    </div>
  )
}

export default SkillCard;
