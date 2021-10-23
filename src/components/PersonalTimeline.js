import {
    Timeline,
} from "@mui/lab";
import {Engineering, Laptop, School} from "@mui/icons-material";
import PersonalTimelineItem from "./PersonalTimelineItem";

const timeline = [
    {
        header: "University of North Texas",
        content: "Bachelor of Music in Composition, GPA: 3.4",
        year: "2011",
        icon: <School />
    },
    {
        header: "Ford Audio-Video",
        content: "Field Engineer",
        year: "2013",
        icon: <Engineering />
    },
    {
        header: "Data Projections",
        content: "Certified Programmer",
        year: "2016",
        icon: <Laptop />
    },
    {
        header: "AVI-SPL",
        content: "Senior Programmer",
        year: "2019",
        icon: <Laptop />
    },
    {
        header: "Auburn University",
        content: "Bachelor of Computer Science, GPA: 4.0",
        year: "2020",
        icon: <School />
    }
]


export default function PersonalTimeline() {
    return (
        <Timeline position="alternate">
            {timeline.map((tl) =>
                <PersonalTimelineItem header={tl.header} content={tl.content} year={tl.year} icon={tl.icon} />
            )}
        </Timeline>
    );
}