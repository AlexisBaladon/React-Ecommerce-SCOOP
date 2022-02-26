import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import './error.css'
import IceCreamWidget from '../../widgets/iceCreamWidget/iceCreamWidget';

interface IProps {
  title: string;
  description: string;
  setHasNavbar?: (b: boolean) => any;
}

const Error404: React.FC<IProps> = ({title, description, setHasNavbar}) => {

  useEffect(() => {
    if (setHasNavbar) setHasNavbar(false);
    
    return () => {
      if (setHasNavbar) setHasNavbar(true);
    };
  }, [setHasNavbar]);

  return <div id="error">
    <IceCreamWidget id="error-logo" color="var(--main-color)" width="512px" height ="512px"/>
    <h1>{title}</h1>
    <p>{description}</p>
    <Link id="home-link" to="/" >Página principal</Link>
  </div>;
}

export default Error404;
