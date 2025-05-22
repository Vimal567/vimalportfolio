import "./Experience.css";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import SchoolIcon from "@mui/icons-material/School";

const Experience = () => {
  return (
    <div id="Experience">
      <div className="experience-heading">
        <h2>
          Experience & <span>Journey</span>
        </h2>
      </div>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: "error.main" }} />
            <TimelineDot>
              <img alt="logo" src="https://innbuilt.com/themes/custom/corp/assets/images/InnBuilt-logo.png" style={{width: '1.8rem',height: '1.4rem'}} />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: "warning.main" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Innbuilt Technologies
            </Typography>
            <Typography>Software Engineer</Typography>
            <Typography color="text.secondary">March 2023 - February 2025</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: "warning.main" }} />
            <TimelineDot>
              <img alt="logo" src="https://internship.thesparksfoundation.info/assests/img/logo.png" style={{width: '1rem'}} />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: "black" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              The Sparks Foundation
            </Typography>
            <Typography>Web Development and Designing Intern</Typography>
            <Typography color="text.secondary">March 2023 - March 2023</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: "success.main" }} />
            <TimelineDot color="success">
              <img alt="logo" src="https://www.crio.do/static/5ac1a39f9eebf6fe904e14069500353e/fd8b5/Crio_Dark.png" style={{width: '1.4rem',height: '1rem'}} />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Crio.Do
            </Typography>
            <Typography>Crio's Full Stack Development (MERN)</Typography>
            <Typography color="text.secondary">March 2022 - January 2023</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            <TimelineDot color="secondary">
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Nehru College
            </Typography>
            <Typography>B.E Aeronautical Graduated</Typography>
            <Typography color="text.secondary">June 2017 - April 2021</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default Experience;
