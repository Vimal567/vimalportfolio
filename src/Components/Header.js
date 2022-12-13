import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav,Container} from 'react-bootstrap';
import logo from "../../src/logo.png"
import { Link } from 'react-scroll';
import "./Header.css"
export default function Header(){
  const reload = () => {
    window.location.reload();
  }
  return(
    <div>
      <Navbar className='fixed-top header' collapseOnSelect expand="md" id="navbg"  variant="dark">
      <Container>
          <Navbar.Brand onClick={reload}>
            <img alt="brand" src={logo} id="brand" /><span id="name">Vimal S</span>
          </Navbar.Brand>
        <div className='justify-content-end'>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav >
            <Link to="Home" className='space'>Home</Link>
            <Link to="About" className='space'>About</Link>
            <Link to="Skills" className='space'>Skills</Link>
            <Link to="Projects" className='space'>Projects</Link>
            <Link to="Education" className='space'>Education</Link>
            <Link to="Contact" className='space'>Contact</Link>
          </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
      </Navbar>
    </div>
  )
}