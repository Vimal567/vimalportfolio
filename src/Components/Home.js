import finger from "./images/finger.png"
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import {Button, Typography} from "@mui/material"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container,Row,Col } from "react-bootstrap";
import "./Home.css"
import homeimage from "./images/homeimage.png";
import Tilt from 'react-parallax-tilt';
import { Box } from '@mui/system';
import { Link } from 'react-scroll';

export default function Home(){
  return (
    <div id="Home">
    <Container fluid="md" >
      <Row >
        <Col sm={12} md={6} lg={6} id="homebio">
          <div>
          <Typography
                className="animated animated-text"
              >
                <span id='greeting'>Hi There,<br/> I'm </span><span className="heroname">Vimal</span>
                <br/>
                <Box className="animated-info" >
                  <span className="animated-item ">Software Developer</span>
                  <span className="animated-item ">Frontend Developer</span>
                  <span className="animated-item ">Web Developer</span>
                </Box>
              </Typography>
          <br/><br/>
          <Button id="aboutbutton" variant="contained"><Link to="About" >About me<ArrowCircleDownIcon id="arrow" /></Link></Button><img alt="pointing" src={finger}/>
          </div>
          <br/>
        </Col >
        <Col sm={12} md={6} lg={6} id="heroes">
        <Tilt className="hero-container"
                    tiltMaxAngleX={13}
                    tiltMaxAngleY={15}
                    perspective={3000}
                    transitionSpeed={1500}
                    >
                <Card className='hero-card' style={{ width: '20rem' }}>
                  <img alt="homeimage" src={homeimage} className="home-image" />

                </Card>
        </Tilt>       
          </Col>
      </Row>
    </Container>
    </div>
  );
}