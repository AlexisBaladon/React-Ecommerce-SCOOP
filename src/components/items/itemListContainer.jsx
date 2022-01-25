import React, {useState} from 'react';
import $ from 'jquery';
import './itemListContainer.css';
import Item from './item.jsx'
import Helado from '../../dataTypes/helado.js';

                /*          id|imagen        | nombre               | tipo        |stock|descuento*/
const helados = [new Helado(1,'./default.png','Chocolate'           ,'Paleta'     ,true     ),
                 new Helado(2,'./default.png','Dulce de Leche'      ,'Paleta'     ,false ,20),
                 new Helado(3,'./default.png','Frambuesa'           ,'Bocha'      ,true     ),
                 new Helado(4,'./default.png','Lemon Pie'           ,'Recipiente' ,false    ),
                 new Helado(5,'./default.png','Chocolate c/Almendra','Bocha'      ,true  ,1 ),
                 new Helado(6,'./default.png','Maracuyá'            ,'Recipiente' ,false    ),
                 new Helado(7,'./default.png','Vainilla'            ,'Recipiente' ,true  ,25),
                 new Helado(8,'./default.png','Limón'               ,'Paleta'     ,false    ),
                ];

const ItemListContainer = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  
  /* Sube al item seleccionado! */
  function scrollToSection(sectionID) {
    $('html, body').animate({
      scrollTop: $(sectionID).offset().top
    }, 100);
  }

  return <>
    <div id="item-list-container">
      <br />
      <div>
        <h3>Producto seleccionado</h3>
        <div id="producto-seleccionado" className= "row justify-content-center">
          {selectedItem ? 
          <Item item = {selectedItem}/> :
          <h3>-</h3>
          }
        </div>
      </div>
      <h3>Lista de productos</h3>
      <div className= "row justify-content-center">
        {helados.map(h =>
           <Item key={h.id} 
            item = {h}
            setSelectedItem = {setSelectedItem}
            onClick={() => scrollToSection('#item-list-container')} 
            />
        )}
      </div>
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