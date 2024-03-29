import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Row, Col } from "react-bootstrap";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import Tilt from "react-parallax-tilt";
import { Link } from "react-scroll";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import homeimage from "./images/homeimage.png";

export default function Home() {
  return (
    <div id="Home">
      <Container fluid="md" className="home-container">
        <Row>
          <Col sm={12} md={6} lg={6} id="homebio">
            <div>
              <div className="animated animated-text">
                <span className="greeting">
                  Hi There,
                  <br /> I'm
                </span>
                <span className="heroname">Vimal</span>
                <br />
                <Box className="animated-info">
                  <span className="animated-item ">Software Engineer</span>
                  <span className="animated-item ">Full Stack Developer</span>
                  <span className="animated-item ">Web Developer</span>
                </Box>
              </div>
              <br />
              <br />
              <Button id="aboutbutton" variant="contained">
                <Link to="About">
                  About me
                  <ArrowCircleDownIcon id="arrow" />
                </Link>
              </Button>
            </div>
            <br />
          </Col>
          <Col sm={12} md={6} lg={6} id="heroes">
            <Tilt
              className="hero-container"
              tiltMaxAngleX={13}
              tiltMaxAngleY={15}
              perspective={3000}
              transitionSpeed={1500}
            >
              <Card className="hero-card" style={{ width: "20rem" }}>
                <img alt="homeimage" src={homeimage} className="home-image" />
              </Card>
            </Tilt>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
