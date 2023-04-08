import DownloadIcon from "@mui/icons-material/Download";
import { Button } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import vimalpic from "./images/Vimal.png";
import Tilt from "react-parallax-tilt";
import { Card, Container, Row, Col } from "react-bootstrap";
import "./About.css";
export default function About() {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div id="About">
      <div id="aboutHeading">
        <PersonIcon id="aboutperson" />
        <h1 id="abouttext">
          {" "}
          About <span className="about-me">Me</span>
        </h1>
      </div>
      <Container fluid="md" id="aboutcontainer">
        <Row>
          <Col sm={12} md={6} lg={6} id="vimalpic">
            <Tilt
              className="tilt-container"
              tiltMaxAngleX={12}
              tiltMaxAngleY={12}
              perspective={3000}
              transitionSpeed={1500}
            >
              <Card className="tilt-card" style={{ width: "16rem" }}>
                <img alt="vimalpic" src={vimalpic} className="imgpic" />
              </Card>
            </Tilt>
            <br />
          </Col>
          <Col sm={12} md={6} lg={6} id="vimalbio">
            <div id="paragraph">
              <div className="firstname">I'm Vimal</div>
              <div className="occupation">
                SOFTWARE ENGINEER || MEAN || MERN
              </div>
              <br />
              <div>
                Hello, I'm a Full Stack Developer who's expertise in both MEAN
                and MERN Stack. I always look towards obtaining a challenging
                and competitive environment where I can apply my technical and
                analytical skills to gain valuable insights and experience in
                the varied areas of my interest. I've worked on{" "}
                <span className="in">HTML</span>,
                <span className="in"> CSS</span>,
                <span className="in"> JavaScript</span>,
                <span className="in"> TypeScript</span>,
                <span className="in"> Angular</span>,
                <span className="in"> Bootstrap</span>,
                <span className="in"> ReactJs</span>,
                <span className="in"> NodeJs</span> ,
                <span className="in"> ExpressJs</span>,
                <span className="in"> Mongo DB</span>. Apart from that I also
                try to solve more DSA problems during my free time to enhance my
                problem solving skills.
              </div>
              <br />
              <div>
                <span className="aboutage">
                  <span className="detailcolor">Age:</span> 24
                </span>
                <span>
                  <span>
                    <span className="detailcolor">Email:</span>
                  </span>{" "}
                  vimalrock82@gmail.com
                </span>
                <br />
                <span className="aboutphone">
                  <span className="detailcolor">Phone:</span> +91 9443707551
                </span>
                <span>
                  <span className="detailcolor">Place:</span> Trichy, Tamilnadu,
                  India - 62001
                </span>
              </div>
              <br />
              <Button
                id="resumebutton"
                variant="contained"
                onClick={() =>
                  openInNewTab(
                    "https://drive.google.com/drive/folders/1hXQ-QGtlSEu9kAxKyvLGxsNFzQIeSS7Z"
                  )
                }
              >
                Resume
                <span id="downloadbutton">
                  <DownloadIcon />
                </span>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
