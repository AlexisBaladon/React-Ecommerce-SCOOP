import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import './error404.css'
const icon = require('./helado.png');

interface IProps {
  setHasNavbar: (b: boolean) => any;
}

const Error404: React.FC<IProps> = ({setHasNavbar}) => {

  //You shouldn't see the navbar on the error page!
  useEffect(() => {
    setHasNavbar(false);
  
    return () => {
      setHasNavbar(true);
    };
    // setHasNavbar won't change:
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  

  return <div id="error">
    <img id="error-logo" src={icon} alt="logo" />
    <h1>Error 404</h1>
    <p>Página no encontrada.</p>
    <Link id="home-link" to="/" >Página principal</Link>
  </div>;
}

export default Error404;
