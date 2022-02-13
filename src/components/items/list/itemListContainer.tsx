import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './itemList'
import Loading from '../../loading/loading';

import ItemShowcase from '../../../dataTypes/itemShowcase'
import {getPromiseFilteredItems, getPromiseItems} from '../../../helpers/promises';

import './itemListContainer.css';

const ItemListContainer: React.FC<{}> = () => {

  //Parameters
  const { id } = useParams<{id?: string}>();

  //Showed items
  const [items,setItems] = useState<ItemShowcase[]>([]);

  useEffect(() => {

    //SetItem shouldn't be usesd after being unmounted
    let isMounted = true;
    const setIfMounted = (item: ItemShowcase[]) => {
      if (isMounted) setItems(item);
    }

    //Filters items by category
    const catFilter = (i: ItemShowcase): boolean => i.category === id;

    //Filters items in case of defining category
    id ? 
    getPromiseFilteredItems(catFilter, setIfMounted) :
    getPromiseItems(setIfMounted);

    return () => {isMounted = false};
  }, [id]);
  
  return <>
    <div id="item-list-container">
      <div id="store-title">
        <h2 id="greeting">Pide tus helados antes de que se derritan!</h2>
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