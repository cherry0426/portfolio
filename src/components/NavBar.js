import { useState, useEffect } from "react";
import { Navbar, Nav, Container} from "react-bootstrap";
import navIcon1 from '../assets/nav-icon1.svg';
import navIcon2 from '../assets/nav-icon2.svg';
import navIcon3 from '../assets/nav-icon3.svg';
import { ArrowRightCircle } from 'react-bootstrap-icons';

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/" style={{ color: "white", fontWeight: "bold" }}>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#experiences" className={activeLink === 'experiences' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('experiences')}>Experience</Nav.Link>
              <Nav.Link href="#academics" className={activeLink === 'academics' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('academics')}>Academics</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/ananyakatpally/"><img src={navIcon1} alt="lin"/></a>
                <a href="#"><img src={navIcon2} alt="Ins"/></a>
                <a href="https://github.com/cherry0426"><img src={navIcon3} alt="Git"/></a>
              </div>
              <button onClick={() => window.location.href = 'mailto:ananya.katpally26@gmail.com?subject=Let%27s%20Connect&body=Hi%20Ananya,%0A%0AI%20came%20across%20your%20portfolio%20and%20I%20would%20like%20to%20connect%20with%20you.%0A%0ARegards,%0A[Your%20Name]'}
                >Let's Connect! <ArrowRightCircle size={28} /></button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}