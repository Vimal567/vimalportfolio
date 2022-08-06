
import { Link } from 'react-scroll';
import referlink from "./images/Education/refer.png"
import collegelogo from "./images/Education/collegelogo.png"
import rightarrow from "./images/Education/rightarrow.png"
import criologo from "./images/Education/crio.png"
import grad from "./images/Education/gradlogo.png"
import { Container, Card } from "react-bootstrap";
import "./Education.css"

export default function Education(){
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }

    return(
        <div id="Education">
            <div id="Educationheading"><img alt="icon" src={grad} id="eduicon" /><h2 id='abouttext'> Education </h2></div>
            <Container  className="educontainer">
                <Card className="edu-inner-container" style={{ width: '18rem' }} onClick={() => openInNewTab('https://www.crio.do/')}>
                    <div className="edu-logo-container">
                        <img alt="crio logo" src={criologo} className="criologo" />
                    </div>
                    <Card.Body className="edu-body">
                        <div className="edu-body1">
                        <h5>Crio.Do E-Learning Platform, Bengaluru</h5>
                        <div>
                            Software Development
                        </div>
                        <div>March 2022 - Present</div>
                        </div>
                    <hr/>
                        <div>
                            <div>
                                <img alt="buttlet arrow" src={rightarrow} className="rightarrow" />
                                Currently, I am doing a Learning Program as a Full Stack Developer.
                            </div>
                            <div>
                                <img alt="buttlet arrow" src={rightarrow} className="rightarrow" />
                                I have worked on multiple real-world projects using JavaScript along with React.Js <Link to="Projects" className='refericon'><img alt="refer" src={referlink} /></Link>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
                <br />
                <Card className="edu-inner-container" style={{ width: '18rem' }} onClick={() => openInNewTab('https://www.nehruinstitute.com/')}>
                    <div className="edu-logo-container">
                        <img alt="crio logo" src={collegelogo} className="criologo" />
                    </div>
                    <Card.Body className="edu-body">
                        <div className="edu-body1">
                        <h5>Nehru Institute of Engineering and Technology, Coimbatore</h5>
                        <div>
                            BE Aeronautical Engineering
                        </div>
                        <div>2017 - 2021</div>
                        </div>
                    <hr/>
                        <div>
                            <div>
                                <img alt="buttlet arrow" src={rightarrow} className="rightarrow" />
                                I have studied some basic Aeronautical concepts.
                            </div>
                            <div>
                                <img alt="buttlet arrow" src={rightarrow} className="rightarrow" />
                                Like Aerodynamics, Propulsion, Aircraft Structures, etc. 
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Container>

        </div>
    )
}