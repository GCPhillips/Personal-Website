import {Avatar, Link, Paper, Typography} from "@mui/material";
import PersonalTimeline from "./PersonalTimeline";
import Skills from "./Skills";

export default function AboutMe() {
    return (
        <Paper elevation={10}>
            <div style={{ display: "flex", padding: 15, margin: 15, justifyContent: "center"}}>
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
                    Hey there! My name is Grant Phillips.  I'm currently a Senior Programmer at AVI-SPL where I program Crestron control systems.
                    <br/>
                    I am an Auburn University graduate where I received my Bachelor of Computer Science degree in 2020 with a 4.0 GPA.
                    My current areas of interest are in fine-tuning Software Engineering practices, working within Linux, and learning more about AWS.
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