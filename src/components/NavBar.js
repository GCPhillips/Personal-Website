import {Box, IconButton, Tab, Tabs} from "@mui/material";
import {GitHub, LinkedIn} from "@mui/icons-material";

export default function NavBar(props) {

    const handleChange = (event, newValue) => {
        props.setValue(newValue);
    }

    return (
        <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Tabs textColor="primary" value={props.value} onChange={handleChange}>
                    <Tab label="About Me" />
                    <Tab label="Projects" />
                </Tabs>
                <a href="https://www.linkedin.com/in/gcphillips/" style={{ display: "flex"}}>
                    <IconButton>
                        <LinkedIn />
                    </IconButton>
                </a>
                <a href="https://github.com/GCPhillips" style={{ display: "flex"}}>
                    <IconButton>
                        <GitHub />
                    </IconButton>
                </a>
            </div>
        </Box>
    )
}