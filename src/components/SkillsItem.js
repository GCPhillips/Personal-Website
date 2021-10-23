import {Rating, Typography} from "@mui/material";
import {Circle, CircleOutlined} from "@mui/icons-material";

export default function SkillsItem(props) {
    return (
        <li style={{listStyleType: "none", padding: "10px"}}>
            <Typography component="legend">{props.name}</Typography>
            <Rating readOnly
                icon={<Circle />}
                emptyIcon={<CircleOutlined />}
                name="customized-10"
                sx={{color: "#3b5d75"}}
                defaultValue={props.rating}
                max={5} />
        </li>
    );
}