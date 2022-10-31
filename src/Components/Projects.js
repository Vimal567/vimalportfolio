import DetailsIcon from '@mui/icons-material/Details';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CodeIcon from '@mui/icons-material/Code';
import Tilt from 'react-parallax-tilt';
import {Card, Container} from "react-bootstrap";
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
            <section class="work">
                <h2 class="heading"><CodeIcon className='codeicon' />Projects <span>Made</span></h2>
                <Container  className='projectcontainer'>
                {/* <Tilt
                    className="parallax-effect-img"
                    tiltMaxAngleX={40}
                    tiltMaxAngleY={40}
                    perspective={800}
                    transitionSpeed={1500}
                    scale={1.1}
                >
                    <img src="https://media.istockphoto.com/vectors/logo-of-a-green-life-tree-with-roots-and-leaves-vector-illustration-vector-id1130887322?k=20&m=1130887322&s=612x612&w=0&h=dPVnCDJ4ocIqtn51iJDzEKdesx_RikdT74asv81jJdk=" className="inner-element" alt="pic" />
                </Tilt> */}
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
                        <span className='iconpointer' onClick={() => openInNewTab('https://xflix-vimal-frontend.netlify.app/')}><button className='view-button'>View<OpenInNewIcon style={{ height: '1rem' }}/></button></span>
                        <span className='iconpointer' onClick={() => openInNewTab('https://www.crio.do/learn/portfolio/vimalrock82/ME_BUILDOUT_XFLIX_REACT/')}><button className='details-button'>Details<DetailsIcon style={{ height: '1.3rem' }}/></button></span>
                    </Card.Body>
                </Card>
                </Tilt>
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
                    A news feed website that features the latest news for selective topics, from Flipboard.
                    </div>
                    <div className='toolused'>HTML5 | CSS3 | BootStrap | JavaScript</div>
                    <Card.Body className='cardicons'>
                        <span className='iconpointer' onClick={() => openInNewTab('https://vimal-crio-news-feed.netlify.app/')}><button className='view-button'>View<OpenInNewIcon style={{ height: '1rem' }}/></button></span>
                        <span className='iconpointer' onClick={() => openInNewTab('https://www.crio.do/learn/portfolio/vimalrock82/ME_BUILDOUT_XBOARD/')}><button className='details-button'>Details<DetailsIcon style={{ height: '1.3rem' }}/></button></span>
                    </Card.Body>
                </Card>
                </Tilt>
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
                </Container>
            </section>
        </div>
    )
}