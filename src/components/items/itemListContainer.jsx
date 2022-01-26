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
                 new Helado(5,'./default.png','Maracuyá','Bocha'    ,'Bocha'      ,true  ,1 ),
                 /*new Helado(6,'./default.png','Frutilla'            ,'Recipiente' ,false    ),
                 new Helado(7,'./default.png','Vainilla'            ,'Recipiente' ,true  ,25),
                 new Helado(8,'./default.png','Limón'               ,'Paleta'     ,false    ),*/
                ];

const ItemListContainer = ({greeting}) => {
  const [selectedItem, setSelectedItem] = useState(null);
  
  // Sube al item seleccionado!
  const scrollToSection = sectionID => {
    $('html, body').animate({
      scrollTop: $(sectionID).offset().top
    }, 100);
  }

  // Componente auxiliar
  const ItemSeleccionado = () =>
    <> {
      selectedItem ? 
      <Item item = {selectedItem}/> :
      <h3>-</h3>
    } </>

  // Componente auxiliar
  const ListaItems = () =>
    <> {
      helados.map(h =>
        <Item 
          key={h.id} 
          item = {h}
          setSelectedItem = {setSelectedItem}
          onClick={() => scrollToSection('#producto-seleccionado')} 
          />
      )
    } </>

  return <>
    <div id="item-list-container">
      <div id="titulo-tienda">
        <h2 id="greeting">{greeting}</h2>
      </div>
      <div id="producto-seleccionado" className="row justify-content-center">
        <h3>Producto seleccionado</h3>
        <ItemSeleccionado />
      </div>
      <div id="lista-productos" className= "row">
        <h3>Lista de productos</h3>
        <ListaItems />
      </div>
    </div>
  </>
}

export default ItemListContainer;