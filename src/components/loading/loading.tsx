import React from 'react';

import './loading.css';
const icon = require('./helado.png');

const Loading: React.FC<{}> = () => {
  return <>
    <div id="waiting">
      <div id="waiting-inner">
        <img id="waiting---" src={icon} width="150px" alt="waiting..."/>
        <h1 id="waiting-text">Cargando...</h1>
      </div>
    </div>
  </>;
}

export default Loading;
