import React from "react";
import { useRoutes } from 'react-router';
import routes from './routes';
const App = () => {
  const routing = useRoutes(routes);
  return (

    [routing]

  );
}

export default App;