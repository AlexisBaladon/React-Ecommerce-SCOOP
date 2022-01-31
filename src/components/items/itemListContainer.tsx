import React, { FunctionComponent, useState } from 'react';
import './itemListContainer.css';
import ItemList from './itemList'
import DtItem from '../../dataTypes/item'
import {obtenerPromiseHelados} from '../../logic/promises';

interface IProps {
  greeting: string;
}

const ItemListContainer: FunctionComponent<IProps> = ({greeting}: IProps) => {
  const [helados,setHelados] = useState<DtItem[]>([]);
  obtenerPromiseHelados(helados, setHelados);
  
  return <>
    <div id="item-list-container">
      <div id="titulo-tienda">
        <h2 id="greeting">{greeting}</h2>
      </div>
      <div id="lista-productos" className= "row">
        <h2>Tienda</h2>
        <ItemList items={helados} />
      </div>
    </div>
  </>
}

export default ItemListContainer;