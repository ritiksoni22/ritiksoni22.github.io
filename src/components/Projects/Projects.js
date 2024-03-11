import "./projects.css";
import ProjectCard from "./ProjectCard";
import projects_json from "./projects.json";

const Projects = () => {
    return (
        <div className="projects" id="projects">
            <strong>Projects</strong>
            {projects_json.map((project, i) => <ProjectCard project={project} key={i} />)}
        </div>
    )
}

export default Projects