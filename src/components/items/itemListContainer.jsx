import React from 'react';
import './itemListContainer.css';
import Item from './item.jsx'
import HeladoPaleta from '../../logica/heladoPaleta.js';
import HeladoBocha from '../../logica/heladoBocha.js';

const helados = [new HeladoPaleta(1,'./default.png','Chocolate',true),
                 new HeladoPaleta(2,'./default.png','Dulce de Leche',false),
                 new HeladoBocha(3,'./default.png','Frambuesa',true,'Frutal'),
                 new HeladoBocha(4,'./default.png','Lemon Pie',false,'Crema'),
                 new HeladoBocha(5,'./default.png','Chocolate c/Almendra',true,'Crema'),
                 new HeladoBocha(6,'./default.png','Maracuyá',false,'Frutal'),
                 new HeladoBocha(7,'./default.png','Vainilla',true,'Crema'),
                 new HeladoBocha(8,'./default.png','Frutal',false,'Limón'),
                ];           

const ItemListContainer = () => {

  return <>
      <div className= "row contenedor justify-content-center">
        {helados.map(h =>
          <>
           <Item key={h.id} item = {h} />
          </>
        )}
      </div>
    </>
}

export default ItemListContainer;

    /* ZONA EXPERIMENTAL
    const filtroPaleta = item => item instanceof HeladoPaleta;
    const filtroBochaFruta = item => item instanceof HeladoBocha && item.tipoSabor === 'Frutal';
    const filtroBochaCrema = item => item instanceof HeladoBocha && item.tipoSabor === 'Crema';

    const tipoBochas = ['Paleta','Frutal','Crema'];

    let heladosFiltrados = new Map([
        ['Paleta', helados.filter(filtroPaleta)],
        ['Frutal', helados.filter(filtroBochaFruta)],
        ['Crema', helados.filter(filtroBochaCrema)],
        ])
        */