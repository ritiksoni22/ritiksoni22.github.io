import "./experiences.css";
import ExperienceCard from "./ExperienceCard";
import experiences_json from "./experiences.json";

const Experiences = () => {
    return (
        <div className="experience" id="experience">
            <strong>Experience</strong>
            {experiences_json.map((exp, i) => <ExperienceCard exp={exp} key={i} />)}
        </div>
    )
}

export default Experiences