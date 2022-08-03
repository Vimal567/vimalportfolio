import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav,Container} from 'react-bootstrap';
import logo from "../../src/logo.png"
import { Link } from 'react-scroll';
import "./Header.css"
export default function Header(){
    return(
      <div>
        <Navbar className='fixed-top' collapseOnSelect expand="md" id="navbg"  variant="dark">
        <Container>
          <Link to="Home" ><Navbar.Brand href="#home"><img alt="brand" src={logo} id="brand" /><span id="name">Vimal S</span></Navbar.Brand></Link>
          <div className='justify-content-end'>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav >
              <Nav.Link className='navheading space' ><Link to="Home" >Home</Link></Nav.Link>
              <Nav.Link className='navheading space' ><Link to="About" >About</Link></Nav.Link>
              <Nav.Link className='navheading space' ><Link to="Skills" >Skills</Link></Nav.Link>
              <Nav.Link className='navheading space' ><Link to="Projects" >Projects</Link></Nav.Link>
              <Nav.Link className='navheading space' ><Link to="Experience" >Experience</Link></Nav.Link>
              <Nav.Link className='navheading space' ><Link to="Education" >Education</Link></Nav.Link>
              <Nav.Link className='navheading space' ><Link to="Contact" >Contact</Link></Nav.Link>
            </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
        </Navbar>
      </div>
    )
}