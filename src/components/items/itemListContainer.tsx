import React from 'react';
import './itemListContainer.css';
import Item from './item'
import Helado from '../../dataTypes/helado';

                /*          id|imagen        | nombre               stock|descuento*/
const helados = [new Helado(1,'./default.png','Chocolate'           ,10     ),
                 new Helado(2,'./default.png','Dulce de Leche'      ,0   ,20),
                 new Helado(3,'./default.png','Frambuesa'           ,2      ),
                 new Helado(4,'./default.png','Lemon Pie'           ,1      ),
                 new Helado(5,'./default.png','Maracuyá'            ,7   ,1 ),
                 new Helado(6,'./default.png','Frutilla'            ,16     ),
                 new Helado(7,'./default.png','Vainilla'            ,22  ,25),
                 new Helado(8,'./default.png','Limón'               ,4      ),
                ];

interface IProps {
  greeting: string;
}

const ItemListContainer = ({greeting}: IProps) => {

  //ItemCount
  const onAdd = (num: number, setNum: React.Dispatch<number>): void => setNum(num + 1);
  const onSub = (num: number, setNum: React.Dispatch<number>): void => setNum(num - 1);
  const initial: number = 0;

  // Componente auxiliar
  const ListaItems = () =>
    <> {
      helados.map(h =>
        <Item 
          key={h.id} 
          item = {h}
          setSelectedItem = {null}
          onClick={{}}
          initial = {initial}
          onAdd = {onAdd}
          onSub = {onSub}
          />
      )
    } </>

  return <>
    <div id="item-list-container">
      <div id="titulo-tienda">
        <h2 id="greeting">{greeting}</h2>
      </div>
      <div id="lista-productos" className= "row">
        <h2>Lista de productos</h2>
        <ListaItems />
      </div>
    </div>
  </>
}

export default ItemListContainer;