import {Button, Card, CardContent, Chip, Grid, Typography} from "@mui/material";
import {GitHub} from "@mui/icons-material";


export default function ProjectsItem(props) {
    return (
        <Grid item xs={12} md={6}>
            <Card elevation={10}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        {props.label}
                    </Typography>
                    <Typography sx={{ fontSize: 16}} color="text.secondary" gutterBottom>
                        {props.description}
                    </Typography>
                    <div style={{ marginTop: "25px"}}>
                        <Typography style={{ padding: "10px 0" }} sx={{ fontSize: 12 }} color="text.secondary">
                            Technology Used
                        </Typography>
                        {props.technology.map((tech, index) => <Chip style={{margin: "5px"}} label={tech} key={index}/>)}
                    </div>
                </CardContent>
                <a href={props.github}>
                    <Button color="primary">
                        <GitHub style={{ padding: "5px"}}/>
                        GitHub
                    </Button>
                </a>
            </Card>
        </Grid>
    );
}