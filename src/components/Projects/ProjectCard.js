import arrow from "../../assets/images/arrow.png";

const setGlowPosition = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--x', (event.clientX - rect.left).toString());
    event.currentTarget.style.setProperty('--y', (event.clientY - rect.top).toString());
};

const resetGlowPosition = (event) => {
    event.currentTarget.style.setProperty('--x', '50');
    event.currentTarget.style.setProperty('--y', '50');
};

const getExperienceTag = (name) => {
    if (name.toLowerCase().includes('templify')) return 'Workiflow (Freelance)';
    return 'Avniro | PeopleHum | Engati';
};

const ProjectCard = ({ project }) => {
    const Wrapper = project.link ? 'a' : 'div';
    const wrapperProps = project.link ? {
        href: project.link,
        target: "_blank",
        rel: "noreferrer",
        'aria-label': `Open ${project.name} in new tab`
    } : {};

    return (
        <Wrapper
            className="project-card glow-on-mouse-over"
            onMouseMove={setGlowPosition}
            onMouseLeave={resetGlowPosition}
            {...wrapperProps}
        >
            <div className="project-media">
                <img src={project.thumbnail} alt={project.name} />
            </div>
            <div className="pc-info-div">
                <div className="project-meta">
                    <h3>{project.name}</h3>
                    {project.link && <span className="project-chip">Case study</span>}
                    <a className="project-exp-tag" href="#experience">{getExperienceTag(project.name)}</a>
                </div>
                <p>{project.desc}</p>
                <div className="skill-tags">
                    {project.skills.map((skill, i) => <div key={i}>{skill}</div>)}
                </div>
                {project.link && (
                    <div className="project-cta">
                        <span>View project</span>
                        <img className="arrow" src={arrow} alt="" aria-hidden="true" />
                    </div>
                )}
            </div>
        </Wrapper>
    )
}

export default ProjectCard;
