import SkillsItem from "./SkillsItem";

const skills = [
    { name: "C#", rating: 4 },
    { name: "Java", rating: 4 },
    { name: "React", rating: 3 },
    { name: "Docker", rating: 3 },
    { name: "Linux", rating: 3 },
    { name: "AWS", rating: 2}
]

export default function Skills() {
    return (
        <div style={{ display: "flex", justifyContent: "center"}}>
            <ul stlye={{margin: "15px"}}>
                {skills.map((skill, index) =>
                    <SkillsItem name={skill.name} rating={skill.rating} key={index} />
                )}
            </ul>
        </div>
    );
}