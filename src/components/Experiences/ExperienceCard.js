import arrow from "../../assets/images/arrow.png";

const setGlowPosition = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--x', (event.clientX - rect.left).toString());
    event.currentTarget.style.setProperty('--y', (event.clientY - rect.top).toString());
};

const ExperienceCard = ({ exp }) => {
    return (
        <a className="experience-card glow-on-mouse-over" href={exp.link} target="_blank" rel="noreferrer" onMouseMove={setGlowPosition}>
            <span className="timeline-dot" aria-hidden="true"></span>
            <div className="experience-body">
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
            </div>
        </a>
    )
}

export default ExperienceCard;
