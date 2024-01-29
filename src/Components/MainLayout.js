import React from 'react';
import { Outlet } from 'react-router'; // Import Outlet from react-router

// Import styled-components for styling
import styled from 'styled-components';

// Import Navbar component
import Navbar from './NavBar';

// Define styled components for layout
const MainLayoutRoot = styled('div')(({ theme }) => ({
  overflow: 'hidden',
}));

const MainLayoutWrapper = styled('div')({
  display: 'flex',
  flex: 'auto',
  overflow: 'hidden',
});

const MainLayoutContainer = styled('div')({
  display: 'flex',
  flex: 'auto',
  overflow: 'hidden',
});

const MainLayoutContent = styled('div')({
  flex: 'auto',
  height: '100%',
  overflow: 'auto',
});

// Define MainLayout component
const MainLayout = () => (
  <MainLayoutRoot>
      <Navbar /> 

    <MainLayoutWrapper>

      <MainLayoutContainer>
        <MainLayoutContent>
          <Outlet /> 
        </MainLayoutContent>
      </MainLayoutContainer>
    </MainLayoutWrapper>
  </MainLayoutRoot>
);

export default MainLayout;
