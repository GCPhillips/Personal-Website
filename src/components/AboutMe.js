import {Avatar, Link, Paper, Typography} from "@mui/material";
import PersonalTimeline from "./PersonalTimeline";
import Skills from "./Skills";

export default function AboutMe() {
    return (
        <Paper elevation={10} style={{ marginTop: "25px"}}>
            <div style={{ display: "flex", padding: 15, justifyContent: "center"}}>
                <Avatar
                    component={Paper}
                    elevation={10}
                    style={{alignSelf: "center"}}
                    alt="Grant Phillips" src="./avatar.jpg"
                    sx={{ width: 200, height: 200 }}
                />
            </div>
            <div style={{padding: "0px 15px"}}>
                <Typography variant={"p"}>
                    Hey there! My name is Grant Phillips.  I'm currently a Senior Software Engineer at AVI-SPL where I develop our <a href="https://avispl.com/symphony/">Symphony</a> product.
                    <br/>
                    I am currently completing my Master of Science in Computer Science degree at the University of Texas.
                    <br/>
                    <br/>
                    My current areas of interest are in fine-tuning Software Engineering practices, learning about Machine Learning, and applying Machine Learning to music and audio problems. 
                    <br/>
                    <br/>
                    Want to get in touch? Connect with me on {<Link href={"https://www.linkedin.com/in/gcphillips"}>LinkedIn</Link>}!
                </Typography>
            <hr/>
            </div>
            <div style={{ display: "flex", justifyContent: "center"}}>
                <Typography variant={"h6"} sx={{px: "12px"}}>
                    Here are some of my skills...
                </Typography>
            </div>
            <Skills />
            <hr/>
            <div style={{ display: "flex", justifyContent: "center"}}>
                <Typography variant={"h6"} sx={{px: "12px"}}>
                    Here's a brief rundown of my history...
                </Typography>
            </div>
            <div style={{padding: "15px"}}>
                <PersonalTimeline />
            </div>
        </Paper>
    )
}
