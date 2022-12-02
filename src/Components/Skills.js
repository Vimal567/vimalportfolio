import html from "./images/skills/html.png"
import css from "./images/skills/css.png"
import javascript from "./images/skills/javascript.png"
import react from "./images/skills/react.png"
import bootstrap from "./images/skills/bootsrtap.png"
import materialui from "./images/skills/materialui.png"
import github from "./images/skills/github.png"
import restapi from "./images/skills/rest.png"
import responsive from "./images/skills/responsive.png"
import heroku from "./images/skills/heroku.png"
import netlify from "./images/skills/netlify.png"
import cpp from "./images/skills/cpp.png"
import python from "./images/skills/python.png"
import nodejs from "./images/skills/nodejs.png"
import mongodb from "./images/skills/mongodb.png"
import expressjs from "./images/skills/expressjs.png"
import skillimg from "./images/skills/skill.gif"
import { Container,Row,Col } from "react-bootstrap";
import LaptopIcon from '@mui/icons-material/Laptop';
import "./Skills.css"

export default function Skills(){
    return(
        <div id="Skills">
            <section class="skills" id="skills">
                <h2 class="heading"><LaptopIcon className='laptop'/> Skills & <span> Abilities</span></h2>
                <Container fluid="md" className="skillscontainer" >
                    <Row>
                        <Col sm={12} md={12} lg={6} className="skillimage">
                            <img alt="skillimage" src={skillimg} id="imgsk" />
                            </Col>
                        <Col sm={12} md={12} lg={6} className="skillicons">
                            <Row>
                            <Container class="bar">
                                <div className="iconcontainer">
                                    <div class="iconboxes">
                                        <img alt="html" src={html}/>
                                        <span className="skillicontext">HTML</span>
                                    </div>
                                    <div class="iconboxes">
                                        <img alt="css" src={css}/>
                                        <span className="skillicontext">CSS</span>
                                    </div>
                                    <div class="iconboxes">
                                        <img alt="javascript" src={javascript}/>
                                        <span className="skillicontext">JavaScript</span>
                                    </div>
                                    <div class="iconboxes">
                                        <img alt="React" src={react}/>
                                        <span className="skillicontext">React</span>
                                    </div>
                                    <div class="iconboxes">
                                        <img alt="bootstrap" src={bootstrap}/>
                                        <span className="skillicontext">Bootstrap</span>
                                    </div>
                                    <div class="iconboxes">
                                        <img alt="material ui" src={materialui}/>
                                        <span className="skillicontext">Material UI</span>
                                    </div>
                                    <div class="iconboxes">
                                        <img alt="github" src={github}/>
                                        <span className="skillicontext">GitHub</span>
                                    </div>
                                    <div class="iconboxes">
                                        <img alt="Rest api" src={restapi}/>
                                        <span className="skillicontext">Rest Api</span>
                                    </div>
                                    <div class="iconboxes">
                                        <img alt="Responsive design" src={responsive}/>
                                        <span className="skillicontext">Responsive</span>
                                        <span className="skillicontext"> Design</span>
                                    </div>
                                    <div class="iconboxes">
                                        <img alt="heroku" src={heroku}/>
                                        <span className="skillicontext">Heroku</span>
                                    </div>
                                    <div class="iconboxes">
                                        <img alt="netlify" src={netlify}/>
                                        <span className="skillicontext">Netlify</span>
                                    </div>
                                    <div class="iconboxes">
                                        <img alt="node js" src={nodejs}/>
                                        <span className="skillicontext">Node Js</span>
                                    </div>
                                    <div class="iconboxes">
                                        <img alt="MongoDB" src={mongodb}/>
                                        <span className="skillicontext">MongoDB</span>
                                    </div>
                                    <div class="iconboxes">
                                        <img alt="Express js" src={expressjs}/>
                                        <span className="skillicontext">Express Js</span>
                                    </div>
                                    <div class="iconboxes">
                                        <img alt="C++" src={cpp}/>
                                        <span className="skillicontext">C++</span>
                                    </div>
                                    <div class="iconboxes">
                                        <img alt="python" src={python}/>
                                        <span className="skillicontext">Python</span>
                                    </div>
                                </div>
                            </Container>
                            </Row>

                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}