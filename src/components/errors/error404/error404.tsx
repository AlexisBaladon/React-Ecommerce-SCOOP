import React from 'react';
import { Link } from 'react-router-dom';
import './error404.css'

const Error404 = () => {
  return <div className="App App-header">
    <img src={window.location.origin + "/helado.png"} className="App-logo" alt="logo" />
    <h1>Error 404</h1>
    <p>Página no encontrada.</p>
    <Link className="App-link" to="/" > Página principal </Link>
  </div>;
}

export default Error404;
