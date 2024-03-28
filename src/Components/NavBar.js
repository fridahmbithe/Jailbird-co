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
    <Logo >Hillary's ThriftStore </Logo>
    <MobileNavToggle onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
      {isMobileNavOpen ? 'Close' : 'Menu'}
    </MobileNavToggle>
    <DesktopNav>
      <NavItem><Link to="">Home</Link></NavItem>
      <NavItem><Link to="/news">Products</Link></NavItem>
      <NavItem><Link to="/cart"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>
</Link></NavItem>
    </DesktopNav>
    <MobileNav style={{ display: isMobileNavOpen ? 'flex' : 'none' }}>
     <NavItem><Link to="">Home</Link></NavItem>
      <NavItem><Link to="/news">Products</Link></NavItem>
      <NavItem><Link to="/cart"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>
</Link></NavItem>
    </MobileNav>
  </Nav>
  );
};

export default NavBar;