import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom


const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #D9D9D9;
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
  }
`;
const Logo = styled.h1`
  font-size: 1.5rem;
  margin: 0;
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

  return (
    <Nav>
    <Logo >JAILBIRD</Logo>
    <MobileNavToggle onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
      {isMobileNavOpen ? 'Close' : 'Menu'}
    </MobileNavToggle>
    <DesktopNav>
      <NavItem><Link to="">Home</Link></NavItem>
      <NavItem><Link to="/news">Services</Link></NavItem>
      <NavItem><Link to="/">Reviews</Link></NavItem>
      <NavItem><Link to="/">About</Link></NavItem>
    </DesktopNav>
    <MobileNav style={{ display: isMobileNavOpen ? 'flex' : 'none' }}>
     <NavItem><Link to="/">Home</Link></NavItem>
      <NavItem><Link to="/">Services</Link></NavItem>
      <NavItem><Link to="/">Reviews</Link></NavItem>
      <NavItem><Link to="/">About</Link></NavItem>
    </MobileNav>
  </Nav>
  );
};

export default NavBar;