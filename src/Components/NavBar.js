import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from "../Assets/Logo (2).png"

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
width: 150px;
`;
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

const DesktopNav = styled.ul`
  display: flex;
  flex-direction: row;

  @media (max-width: 767px) {
    display: none;
  }
`;

const MobileNav = styled.ul`
  display: none;
  flex-direction: column;
  margin: 0;
  padding: 0;

  @media (max-width: 767px) {
    display: flex;
  }
`;

const NavBar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false);
  const [activeLink, setActiveLink] = React.useState("/");

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };
  return (
    <Nav >
     <Logo src={logo} alt="Company Logo" />

    <MobileNavToggle onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
      {isMobileNavOpen ? 'Close' : 'Menu'}
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
    <MobileNav style={{ display: isMobileNavOpen ? 'flex' : 'none' }}>
     <NavItem><Link to="/" className={activeLink === "/" ? "active" : ""} onClick={() => handleLinkClick("/")}>
     Home</Link></NavItem>
      <NavItem><Link to="/services" className={activeLink === "/" ? "active" : ""} onClick={() => handleLinkClick("/services")}>
      Services</Link></NavItem>
      <NavItem><Link to="/jobs" className={activeLink === "/" ? "active" : ""} onClick={() => handleLinkClick("/jobs")}>
      Jobs</Link></NavItem>
      <NavItem><Link to="/about" className={activeLink === "/" ? "active" : ""} onClick={() => handleLinkClick("/about")}>
      About</Link></NavItem>
    </MobileNav>
  </Nav>
  );
};

export default NavBar;