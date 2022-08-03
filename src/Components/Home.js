import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import {Button, Typography} from "@mui/material"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col } from "react-bootstrap";
import "./Home.css"
import homeimage from "./images/homeimage-modified2.png";
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
          <Button id="aboutbutton" variant="contained"><Link to="About" >About me<ArrowCircleDownIcon id="arrow" /></Link></Button>
          </div>
          <br/>
        </Col >
        <Col sm={12} md={6} lg={6} id="heroes">
        <div class="tilt-box-wrap">
		      <span class="t_over"></span>
		      <span class="t_over"></span>
		      <span class="t_over"></span>
		      <span class="t_over"></span>
		      <span class="t_over"></span>
		      <span class="t_over"></span>
		      <span class="t_over"></span>
		      <span class="t_over"></span>
		      <span class="t_over"></span>
		      <div class="tilt-box">
			      <strong><img alt="homeimage" src={homeimage} className="title" /></strong>
		      </div>
	      </div>
          
          </Col>
      </Row>
    </Container>
    </div>
  );
}