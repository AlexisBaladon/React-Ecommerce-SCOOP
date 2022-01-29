import React, { FunctionComponent } from 'react';
import './itemListContainer.css';
import ItemList from './itemList'

interface IProps {
  greeting: string;
}

const ItemListContainer: FunctionComponent<IProps> = ({greeting}: IProps) => {
  return <>
    <div id="item-list-container">
      <div id="titulo-tienda">
        <h2 id="greeting">{greeting}</h2>
      </div>
      <div id="lista-productos" className= "row">
        <h2>Lista de productos</h2>
        <ItemList />
      </div>
    </div>
  </>
}

export default ItemListContainer;