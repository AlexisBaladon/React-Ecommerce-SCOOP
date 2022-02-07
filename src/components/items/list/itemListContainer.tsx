import React, { FunctionComponent, useEffect, useState } from 'react';
import './itemListContainer.css';
import ItemList from './itemList'
import DtItem from '../../../dataTypes/item'
import {getFilteredItems, obtenerPromiseHelados} from '../../../helpers/promises';
import Loading from '../../loading/loading';
import { useParams } from 'react-router-dom';

interface IProps {
  greeting: string;
}

const ItemListContainer: FunctionComponent<IProps> = ({greeting}: IProps) => {

  //Parameters
  const { id } = useParams<{id?: string}>();

  //Showed items
  const [helados,setHelados] = useState<DtItem[]>([]);

  //Filters items by category
  const catFilter = (i: DtItem): boolean => i.category === id;

  //SetItem shouldn't be usesd after being unmounted
  let isMounted = false;
  const setIfMounted = (item: DtItem[]) => {
    if (isMounted) setHelados(item);
  }

  //Filters items in case of defining category
  useEffect(() => {
    isMounted = true;
    id ?
    getFilteredItems(catFilter, setIfMounted) :
    obtenerPromiseHelados(setIfMounted);
    return () => {isMounted = false};
  }, [id]);
   
  return <>
    <div id="item-list-container">
      <div id="titulo-tienda">
        <h2 id="greeting">{greeting}</h2>
      </div>
      <div id="lista-productos">
        <div className= "row justify-content-center">
          <h2>Tienda</h2>
          {helados.length?
          <ItemList items={helados} />:
          <Loading />
          }
        </div>
        
      </div>
    </div>
  </>
}

export default ItemListContainer;