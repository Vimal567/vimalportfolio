import DetailsIcon from '@mui/icons-material/Details';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CodeIcon from '@mui/icons-material/Code';
import Tilt from 'react-parallax-tilt';
import {Card, Container, Row, Col} from "react-bootstrap";
import Qkart from "./images/projects/Qkart.png"
import Xboard from "./images/projects/Xboard.png"
import Qtrip from "./images/projects/Qtrip.png"
import XFlix from "./images/projects/XFlix.png"
import "./Projects.css"

export default function Projects(){
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }
    return(
        <div id="Projects" >
            <section className="work">
                <h2 className="heading"><CodeIcon className='codeicon' />Projects <span>Made</span></h2>
                <Container  className='projectcontainer'>
                <Row  className="project-row">
                    <Col xs={12} sm={6} md={6} className="project-column">
                        <Tilt className="projectboxes"
                            tiltMaxAngleX={20}
                            tiltMaxAngleY={10}
                            perspective={2000}
                            transitionSpeed={1500}
                            >
                        <Card className='cardss' style={{ width: '18rem' }}>
                            <img alt='projectimage' variant="top" src={XFlix} className="projectimage" />
                            <div className='cardtitle'>XFlix</div>
                            <div className='cardcontent' >
                                A video platform which hosts videos for the world to watch and upload new Videos by external links.
                            </div>
                            <div className='toolused'>React.Js | Material-UI | CSS3 | Netlify</div>
                            <Card.Body className='cardicons'>
                                <span className='iconpointer' onClick={() => openInNewTab('https://xflix-vimal.netlify.app')}><button className='view-button'>View<OpenInNewIcon style={{ height: '1rem' }}/></button></span>
                                <span className='iconpointer' onClick={() => openInNewTab('https://www.crio.do/learn/portfolio/vimalrock82/ME_BUILDOUT_XFLIX_REACT/')}><button className='details-button'>Details<DetailsIcon style={{ height: '1.3rem' }}/></button></span>
                            </Card.Body>
                        </Card>
                        </Tilt>
                    </Col>
                    <Col xs={12} sm={6} md={6} className="project-column">
                        <Tilt className="projectboxes"
                        tiltMaxAngleX={20}
                        tiltMaxAngleY={10}
                        perspective={2000}
                        transitionSpeed={1500}
                        >
                        <Card className='cardss' style={{ width: '18rem' }}>
                            <img alt='projectimage' variant="top" src={Qkart} className="projectimage" />
                            <div className='cardtitle'>Qkart</div>
                            <div className='cardcontent' >
                                An e-shopping website with variety of products to review and purchase like flipkart for loved customers.
                            </div>
                            <div className='toolused'>React.Js | Material-UI | CSS3 | Netlify</div>
                            <Card.Body className='cardicons'>
                                <span className='iconpointer' onClick={() => openInNewTab('https://qkart-frontend-vimal.netlify.app/')}><button className='view-button'>View<OpenInNewIcon style={{ height: '1rem' }}/></button></span>
                                <span className='iconpointer' onClick={() => openInNewTab('https://www.crio.do/learn/portfolio/vimalrock82/ME_QKART_FRONTEND_V2/')}><button className='details-button'>Details<DetailsIcon style={{ height: '1.3rem' }}/></button></span>
                            </Card.Body>
                        </Card>
                        </Tilt>
                    </Col>
                </Row>
                <Row  className="project-row">
                    <Col xs={12} sm={6} md={6} className="project-column">
                        <Tilt className="projectboxes"
                        tiltMaxAngleX={20}
                        tiltMaxAngleY={10}
                        perspective={2000}
                        transitionSpeed={1500}
                        >
                        <Card className='cardss' style={{ width: '18rem' }}>
                            <img alt='projectimage' variant="top" src={Xboard} className="projectimage" />
                            <div className='cardtitle'>Xboard</div>
                            <div className='cardcontent' >
                                A news feed website that features the latest news for selective topics, from RSS feed of Flipboard.
                            </div>
                            <div className='toolused'>HTML5 | CSS3 | BootStrap | JavaScript</div>
                            <Card.Body className='cardicons'>
                                <span className='iconpointer' onClick={() => openInNewTab('https://vimal-crio-news-feed.netlify.app/')}><button className='view-button'>View<OpenInNewIcon style={{ height: '1rem' }}/></button></span>
                                <span className='iconpointer' onClick={() => openInNewTab('https://www.crio.do/learn/portfolio/vimalrock82/ME_BUILDOUT_XBOARD/')}><button className='details-button'>Details<DetailsIcon style={{ height: '1.3rem' }}/></button></span>
                            </Card.Body>
                        </Card>
                        </Tilt>
                    </Col>
                    <Col xs={12} sm={6} md={6} className="project-column">
                        <Tilt className="projectboxes"
                        tiltMaxAngleX={20}
                        tiltMaxAngleY={10}
                        perspective={2000}
                        transitionSpeed={1500}
                        >
                            <Card className='cardss' style={{ width: '18rem' }}>
                                <img alt='projectimage' variant="top" src={Qtrip} className="projectimage" />
                                <div className='cardtitle'>Qtrip</div>
                                <div className='cardcontent' >
                                A website that aimed travellers to look for different adventures in different cities, and make reservation.
                                </div>
                                <div className='toolused'>HTML5 | CSS3 | BootStrap | JavaScript</div>
                                <Card.Body className='cardicons'>
                                    <span className='iconpointer' onClick={() => openInNewTab('https://qtrip-dynamic-travel.netlify.app/')}><button className='view-button'>View<OpenInNewIcon style={{ height: '1rem' }}/></button></span>
                                    <span className='iconpointer' onClick={() => openInNewTab('https://www.crio.do/learn/portfolio/vimalrock82/ME_QTRIPDYNAMIC/')}><button className='details-button'>Details<DetailsIcon style={{ height: '1.3rem' }}/></button></span>
                                </Card.Body>
                            </Card>
                        </Tilt>
                    </Col>
                </Row>
                </Container>
            </section>
        </div>
    )
}