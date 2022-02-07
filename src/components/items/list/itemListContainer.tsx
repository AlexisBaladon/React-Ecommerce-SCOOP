import React, { FunctionComponent, useEffect, useState } from 'react';
import './itemListContainer.css';
import ItemList from './itemList'
import DtItem from '../../../dataTypes/item'
import {obtenerPromiseHelados} from '../../../helpers/promises';
import Loading from '../../loading/loading';

interface IProps {
  setId: Function;
  greeting: string;
}

const ItemListContainer: FunctionComponent<IProps> = ({setId, greeting}: IProps) => {
  const [helados,setHelados] = useState<DtItem[]>([]);

  useEffect(() => {
    obtenerPromiseHelados(setHelados);
  }, []);
   
  return <>
    <div id="item-list-container">
      <div id="titulo-tienda">
        <h2 id="greeting">{greeting}</h2>
      </div>
      <div id="lista-productos" className= "row">
        <h2>Tienda</h2>
        {helados.length?
         <ItemList setId={setId} items={helados} />:
         <Loading />
        }
        
      </div>
    </div>
  </>
}

export default ItemListContainer;