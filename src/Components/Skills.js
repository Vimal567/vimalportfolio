import html from "./images/skills/html.png";
import css from "./images/skills/css.png";
import javascript from "./images/skills/javascript.png";
import typescript from "./images/skills/typescript.png"
import angular from "./images/skills/angular.png";
import react from "./images/skills/react.png";
import bootstrap from "./images/skills/bootsrtap.png";
import materialui from "./images/skills/materialui.png";
import github from "./images/skills/github.png";
import restapi from "./images/skills/rest.png";
import heroku from "./images/skills/heroku.png";
import netlify from "./images/skills/netlify.png";
import cpp from "./images/skills/cpp.png";
import nodejs from "./images/skills/nodejs.png";
import mongodb from "./images/skills/mongodb.png";
import expressjs from "./images/skills/expressjs.png";
import skillimg from "./images/skills/skill.jpg";
import { Container} from "react-bootstrap";
import Grid from '@mui/material/Grid';
import LaptopIcon from "@mui/icons-material/Laptop";
import "./Skills.css";

export default function Skills() {
  return (
    <div id="Skills">
      <section className="skills">
        <h2 className="heading">
          <LaptopIcon className="laptop" /> Skills & <span> Abilities</span>
        </h2>
        <Container fluid="md" className="skillscontainer">
          <Grid container spacing={2}>
            <Grid item sm={12} md={12} lg={6} className="skillimage">
              <img alt="skillimage" src={skillimg} id="imgsk" />
            </Grid>
            <Grid item sm={12} md={12} lg={6} className="skillicons">
                  <div className="iconcontainer">
                    <div className="iconboxes">
                      <img alt="html" src={html} />
                      <span className="skillicontext">HTML</span>
                    </div>
                    <div className="iconboxes">
                      <img alt="css" src={css} />
                      <span className="skillicontext">CSS</span>
                    </div>
                    <div className="iconboxes">
                      <img alt="javascript" src={javascript} />
                      <span className="skillicontext">JavaScript</span>
                    </div>
                    <div className="iconboxes">
                      <img alt="javascript" src={typescript} />
                      <span className="skillicontext">TyepScript</span>
                    </div>
                    <div className="iconboxes">
                      <img alt="React" src={angular} />
                      <span className="skillicontext">Angular</span>
                    </div>
                    <div className="iconboxes">
                      <img alt="React" src={react} />
                      <span className="skillicontext">React</span>
                    </div>
                    <div className="iconboxes">
                      <img alt="bootstrap" src={bootstrap} />
                      <span className="skillicontext">Bootstrap</span>
                    </div>
                    <div className="iconboxes">
                      <img alt="material ui" src={materialui} />
                      <span className="skillicontext">Material UI</span>
                    </div>
                    <div className="iconboxes">
                      <img alt="github" src={github} />
                      <span className="skillicontext">GitHub</span>
                    </div>
                    <div className="iconboxes">
                      <img alt="Rest api" src={restapi} />
                      <span className="skillicontext">Rest Api</span>
                    </div>
                    <div className="iconboxes">
                      <img alt="heroku" src={heroku} />
                      <span className="skillicontext">Heroku</span>
                    </div>
                    <div className="iconboxes">
                      <img alt="netlify" src={netlify} />
                      <span className="skillicontext">Netlify</span>
                    </div>
                    <div className="iconboxes">
                      <img alt="node js" src={nodejs} />
                      <span className="skillicontext">Node Js</span>
                    </div>
                    <div className="iconboxes">
                      <img alt="MongoDB" src={mongodb} />
                      <span className="skillicontext">MongoDB</span>
                    </div>
                    <div className="iconboxes">
                      <img alt="Express js" src={expressjs} />
                      <span className="skillicontext">Express Js</span>
                    </div>
                    <div className="iconboxes">
                      <img alt="C++" src={cpp} />
                      <span className="skillicontext">C++</span>
                    </div>
                  </div>
            </Grid>
          </Grid>
        </Container>
      </section>
    </div>
  );
}
