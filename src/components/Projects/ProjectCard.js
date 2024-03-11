import arrow from "../../assets/images/arrow.png";

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card glow-on-mouse-over">
            <img src={project.thumbnail} alt={project.name} />
            <div className="pc-info-div">
                <h3>
                    {project.name}
                    <img className="arrow" src={arrow} alt="Open in new tab" />
                </h3>
                <p>{project.desc}</p>
                <div className="skill-tags">
                    {project.skills.map((skill, i) => <div key={i}>{skill}</div>)}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;