import {
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator
} from "@mui/lab";
import {Typography} from "@mui/material";


export default function PersonalTimelineItem(props) {
    return (
        <TimelineItem>
            <TimelineOppositeContent
                sx={{ m: 'auto 0'}}
                align="right"
                variant="body2"
                color="text.secondary">
                {props.year}
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="secondary">
                    {props.icon}
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2}}>
                <Typography sx={{ fontStyle: "italic"}} variant="p" component="span">
                    {props.header}
                </Typography>
                <Typography sx={{ fontSize: "0.85em"}}>
                    {props.content}
                </Typography>
            </TimelineContent>
        </TimelineItem>
    );
}