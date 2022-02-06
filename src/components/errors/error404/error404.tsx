import React from 'react';
import { Link } from 'react-router-dom';
import './error404.css'

const Error404 = () => {
  return <div className="App App-header">
    <img src={window.location.origin + "/helado.png"} className="App-logo" alt="logo" />
    <p>  Error 404: Página no encontrada. </p>
    <Link className="App-link" to="/" > Página principal </Link>
  </div>;
}

export default Error404;
