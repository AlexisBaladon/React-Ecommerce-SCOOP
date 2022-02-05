import React from 'react';
import './loading.css';

const Loading = () => {
  return <>
    <div id="waiting" style={{height: "80vh", backgroundColor: 'whitesmoke'}}>
      <div id="waiting-inner">
        <img id="waiting-" src="./favicon2.ico" width="150px"/>
        <h1 id="waiting-text">Cargando...</h1>
      </div>
    </div>
  </>;
}

export default Loading;
