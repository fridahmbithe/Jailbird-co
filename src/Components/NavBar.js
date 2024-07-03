import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from "../Assets/logo.png"

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(to right, #5CA5A5, #63BABA);
  // background-image: url(/bgimg.jpg);
  color: red;
  padding: 1rem;
`;

const NavItem = styled.li`
  list-style: none;
  margin: 0 1rem;
  font-size: 1.5rem;

  a {
    color: #000;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      color: #bada55;
    }
     &.active {
      color: #bada55;
}
  }
`;
const Logo = styled.img`
max-height: 100px;
width: 250px;
`;
// Mobile Nav Toggle button
const MobileNavToggle = styled.button`
  display: block;
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #bada55;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

// Floating mobile nav card
const MobileNav = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 24px;
  width: 90%;
  max-width: 400px;
  z-index: 100;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transition: all 0.3s ease;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
`;
const DesktopNav = styled.ul`
  display: flex;
  flex-direction: row;

  @media (max-width: 767px) {
    display: none;
  }
`;


const NavBar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false);
  const [activeLink, setActiveLink] = React.useState("/");

  const handleLinkClick = (path) => {
    setActiveLink(path);
    // Close the mobile navigation card when a link is clicked
    setIsMobileNavOpen(false);
  }
  return (
    <Nav >
     <Logo src={logo} alt="Company Logo" />

    <MobileNavToggle onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
        style={{ color: 'black' }}
>
      {isMobileNavOpen ? 'X' : 'Menu'}
    </MobileNavToggle>
    <DesktopNav>
      <NavItem>
      <Link to="/" className={activeLink === "/" ? "active" : ""} onClick={() => handleLinkClick("/")}>
            Home
          </Link>
      </NavItem>
      <NavItem><Link to="/services" className={activeLink === "/services" ? "active" : ""} onClick={() => handleLinkClick("/services")}>
      Services</Link></NavItem>
      <NavItem><Link to="/jobs" className={activeLink === "/jobs" ? "active" : ""} onClick={() => handleLinkClick("/jobs")}>
      Jobs</Link></NavItem>
      <NavItem><Link to="/about" className={activeLink === "/about" ? "active" : ""} onClick={() => handleLinkClick("/about")}>
      About</Link></NavItem>
    </DesktopNav>
    <MobileNav isOpen={isMobileNavOpen}>
     <NavItem><Link to="/" className={activeLink === "/" ? "active" : ""} onClick={() => handleLinkClick("/")}>
     Home</Link></NavItem>
      <NavItem><Link to="/services" className={activeLink === "/" ? "active" : ""} onClick={() => handleLinkClick("/services")}>
      Services</Link></NavItem>
      <NavItem><Link to="/jobs" className={activeLink === "/" ? "active" : ""} onClick={() => handleLinkClick("/jobs")}>
      Jobs</Link></NavItem>
      <NavItem><Link to="/about" className={activeLink === "/" ? "active" : ""} onClick={() => handleLinkClick("/about")}>
      About</Link></NavItem>
      <CloseButton onClick={() => setIsMobileNavOpen(false)}>
        <i className="fas fa-times"></i>
      </CloseButton>
    </MobileNav>

  </Nav>
  );
};

export default NavBar;