import React from 'react';
import './itemListContainer.css';
import Item from './item'
import Helado from '../../dataTypes/helado';
import {helados} from '../../data/helados';

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
          onClick={()=>{}}
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