import React from 'react';
import './itemListContainer.css';
import Item from './item.jsx'
import Helado from '../../logica/helado.js'

const helados = [new Helado(1,'./default.png','Frutilla',true),
                 new Helado(2,'./default.png','Limón',false),
                 new Helado(3,'./default.png','Frambuesa',true),
                 new Helado(4,'./default.png','Chocolate',false),
                ];           

const ItemListContainer = () => {
  return <>
        <div id="contenedor" className="row">
            {helados.map( (item) => (
                <Item key={item.id} item = {item}/>
            ))}
        </div>
    </>;
}

export default ItemListContainer;
