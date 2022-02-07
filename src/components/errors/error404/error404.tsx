import React from 'react';
import { Link } from 'react-router-dom';

import './error404.css'
const icon = require('./helado.png');

const Error404: React.FC<{}> = () => {
  return <div id="error">
    <img id="error-logo" src={icon} alt="logo" />
    <h1>Error 404</h1>
    <p>Página no encontrada.</p>
    <Link id="home-link" to="/" >Página principal</Link>
  </div>;
}

export default Error404;
