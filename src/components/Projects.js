// use <Grid> with <Card> objects

import {Grid, Paper} from "@mui/material";
import ProjectsItem from "./ProjectsItem";

const projects = [
    {
        label: "Musical Instrument Classifier",
        description: "A research project studying different types of neural networks used to classify musical instruments from audio files.",
        technology: ["Python", "Pytorch"],
        github: "https://github.com/GCPhillips/musical-instrument-classifier"
    },
    {
        label: "Java Image Gallery",
        description: "An AWS-deployed application for adding, removing, and viewing images.",
        technology: ["AWS", "Docker", "Gradle", "Java", "Java Spark", "SQL"],
        github: "https://github.com/GCPhillips/java-image-gallery"
    },
    {
        label: "Personal Website",
        description: "My personal website, developed with React and deployed with AWS Amplify.",
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
                    <ProjectsItem
                        label={project.label}
                        description={project.description}
                        technology={project.technology}
                        github={project.github}
                        key={index}/>
                )}
                </Grid>
            </div>
        </Paper>
    );
}
