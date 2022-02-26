import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ItemList from './itemList'
import Loading from '../../loading/loading';

import ItemShowcase from '../../../dataTypes/items/itemShowcase'
import { getItems, getItemsByCategory } from '../../../data/itemHandler';
import Category from '../../../dataTypes/items/category';

import './itemListContainer.css';

const ItemListContainer: React.FC<{}> = () => {

  //Parameters
  const { id } = useParams<{id?: Category}>();

  //Showed items
  const [items,setItems] = useState<ItemShowcase[]>([]);

  useEffect(() => {
      
    //SetItem shouldn't be usesd after being unmounted
    let isMounted = true;
    const setIfMounted = (item: ItemShowcase[]) => {
      if (isMounted) setItems(item);
    }

    //Filters items in case of defining category 
    try {
      (id !== undefined) ? 
      getItemsByCategory(id,setIfMounted):
      getItems(setIfMounted);
    } 
    catch (err: any) {
      console.warn('No se ha podido encontrar el item');
    }
    
    return () => {isMounted = false};
  }, [id]);
  
  return <>
    <div id="item-list-container">
      <div id="store-title">
        <h2 id="greeting">Pide tus helados antes de que se derritan!</h2>
      </div>
      <div id="product-list">
        <div className= "row justify-content-center">
          <h1 className="py-5">Tienda</h1>
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