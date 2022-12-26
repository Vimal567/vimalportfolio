import "./Education.css"
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HandshakeIcon from '@mui/icons-material/Handshake';
import Typography from '@mui/material/Typography';
import SchoolIcon from '@mui/icons-material/School';
import LuggageIcon from '@mui/icons-material/Luggage';
import FeedIcon from '@mui/icons-material/Feed';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Education = () => {
  return (
    <div id="Education">
      <div className="education-heading"><h2>Experience & <span>Journey</span></h2></div>
    <Timeline position="alternate" >
      <TimelineItem>
        <TimelineSeparator>
        <TimelineConnector sx={{ bgcolor: 'error.main' }}/>
          <TimelineDot color="error">
            <VideoLibraryIcon />
          </TimelineDot>
          <TimelineConnector  sx={{ bgcolor: 'warning.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            XFlix
          </Typography>
          <Typography>Watch and Upload videos</Typography>
          <Typography color="text.secondary">Nov 2022</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'warning.main' }} />
          <TimelineDot color="warning">
            <ShoppingCartIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'black' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            QKart
          </Typography>
          <Typography>E-commerce website</Typography>
          <Typography color="text.secondary">July 2022</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'black' }} />
          <TimelineDot sx={{ bgcolor: 'lightgray' }} variant="outlined">
            <FeedIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            XBoard
          </Typography>
          <Typography>News Feed website</Typography>
          <Typography color="text.secondary">June 2022</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
          <TimelineDot color="primary">
            <LuggageIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'success.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            QTrip
          </Typography>
          <Typography>Travel booking website</Typography>
          <Typography color="text.secondary">May 2022</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'success.main' }} />
          <TimelineDot color="success">
            <HandshakeIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Crio
          </Typography>
          <Typography>Joined Crio's Software Development</Typography>
          <Typography color="text.secondary">March 2022</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary">
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Nehru College
          </Typography>
          <Typography>B.E Aeronautical Graduated</Typography>
          <Typography color="text.secondary">April 2021</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    </div>
  );
}

export default Education;