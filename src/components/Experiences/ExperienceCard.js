import arrow from "../../assets/images/arrow.png";

const ExperienceCard = ({ exp }) => {
    return (
        <a className="experience-card glow-on-mouse-over" href={exp.link} target="_blank" rel="noreferrer" alt="workiflow">
            <div className="ec-time-range">{exp.timePeriod}</div>
            <div className="ec-info-div">
                <h3>
                    {exp.designation} · {exp.org}
                    <img className="arrow" src={arrow} alt="open in new tab" />
                </h3>
                <p>{exp.desc}</p>
                <div className="skill-tags">
                    {exp.skills.map((skill, i) => <div key={i}>{skill}</div>)}
                </div>
            </div>
        </a>
    )
}

export default ExperienceCard;