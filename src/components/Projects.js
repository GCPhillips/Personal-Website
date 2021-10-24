// use <Grid> with <Card> objects

import {Grid, Paper} from "@mui/material";
import ProjectsItem from "./ProjectsItem";

const projects = [
    {
        label: "Java Image Gallery",
        description: "An AWS-deployed application for adding, removing, and viewing images.",
        technology: ["AWS", "Docker", "Gradle", "Java", "Java Spark", "SQL"],
        github: "https://github.com/GCPhillips/java-image-gallery"
    },
    {
        label: "Personal Website",
        description: "My personal website, developed with React and hosted through AWS Route 53.",
        technology: ["AWS", "React", "HTML/CSS/JS"],
        github: "https://github.com/GCPhillips/Personal-Website"
    }
]

export default function Projects() {
    return (
        <Paper elevation={10} style={{ marginTop: "25px" }}>
            <div style={{ padding: "15px"}}>
                <Grid container spacing={4}>
                {projects.map((project, index) =>
                    <ProjectsItem label={project.label} description={project.description} technology={project.technology} key={index}/>
                )}
                </Grid>
            </div>
        </Paper>
    );
}