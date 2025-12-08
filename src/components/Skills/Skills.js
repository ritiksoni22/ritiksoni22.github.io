import "./skills.css";
import SkillCard from "./SkillCard";
import skills_json from "./skills.json";

const Skills = () => {
    return (
        <div className="skills" id="skills">
            <strong>Skills</strong>
            <div className="skills-grid">
                {skills_json.map((skill, i) => <SkillCard skill={skill} key={i} />)}
            </div>
        </div>
    )
}

export default Skills
