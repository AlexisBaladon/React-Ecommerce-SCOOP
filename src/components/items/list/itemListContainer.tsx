import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './itemList'
import Loading from '../../loading/loading';

import DtItem from '../../../dataTypes/item'
import {getFilteredItems, getItems} from '../../../helpers/promises';

import './itemListContainer.css';

interface IProps {
  greeting: string;
}

const ItemListContainer: React.FC<IProps> = ({greeting}: IProps) => {

  //Parameters
  const { id } = useParams<{id?: string}>();

  //Showed items
  const [items,setItems] = useState<DtItem[]>([]);

  useEffect(() => {

    //SetItem shouldn't be usesd after being unmounted
    let isMounted = true;
    const setIfMounted = (item: DtItem[]) => {
      if (isMounted) setItems(item);
    }

    //Filters items by category
    const catFilter = (i: DtItem): boolean => i.category === id;

    //Filters items in case of defining category
    id ? 
    getFilteredItems(catFilter, setIfMounted) :
    getItems(setIfMounted);

    return () => {isMounted = false};
  }, [id]);
   
  return <>
    <div id="item-list-container">
      <div id="store-title">
        <h2 id="greeting">{greeting}</h2>
      </div>
      <div id="product-list">
        <div className= "row justify-content-center">
          <h2>Tienda</h2>
          {items.length?
          <ItemList items={items} />:
          <Loading />
          }
        </div>
      </div>
    </div>
  </>
}

export default ItemListContainer;