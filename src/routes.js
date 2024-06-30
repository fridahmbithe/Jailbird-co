// // src/routesConfig.js
// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import MainLayout from './Components/MainLayout';
// import Newsletter from './Components/Newsletter';
// import LandingPage from './Components/LandingPage';

// const routesConfig = [


//   {
//     path: '/',
//     element: <MainLayout />,
//     children: [
//       { path: 'home', element: <LandingPage /> },
//       { path: 'news', element: <Newsletter /> },
//       { path: "/", element: <Navigate to="/home" /> },
//     ],
//   },

// ];

// export default routesConfig;
// src/routesConfig.js
import React from 'react';
// import { Navigate, Route } from 'react-router-dom';
import MainLayout from './Components/MainLayout';
import LandingPage from './Components/LandingPage';
import Services from './Components/Services';
import AboutUs from './Components/AboutUs';
import Jobs from './Components/Jobs';

const routes= [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '', element: <LandingPage /> },
      { path: 'services', element: <Services/> },
      { path: 'about', element: <AboutUs/> },
      { path: 'jobs', element: <Jobs/> },
      // { path: "/", element: <Navigate to="/home" /> },
    ],
  },
];

export default routes;
