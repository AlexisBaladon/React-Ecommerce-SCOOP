import React from 'react';
import IceCreamWidget from '../../widgets/iceCreamWidget/iceCreamWidget';

import './loading.css';

const Loading: React.FC<{}> = () => {
  return <>
    <div id="waiting">
      <div id="waiting-inner">
        <IceCreamWidget id="icon-loading" color="var(--main-color)" width="150px" height ="150px"/>
        <h1 id="waiting-text">Cargando...</h1>
      </div>
    </div>
  </>;
}

export default Loading;
