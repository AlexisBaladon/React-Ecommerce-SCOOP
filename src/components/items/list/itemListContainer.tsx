import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ItemList from './itemList'
import Loading from '../../loading/loading';
import NotFound from '../../errors/error'

import ItemShowcase from '../../../dataTypes/items/itemShowcase'
import { getItems, getItemsByCategory } from '../../../data/itemHandler';
import Category from '../../../dataTypes/items/category';

import './itemListContainer.css';

const ItemListContainer: React.FC<{}> = () => {
  const [notFoundMessage, setNotFoundMessage] = useState<null | {title: string, description: string}>(null);

  const { id } = useParams<{id?: Category}>();

  const [items,setItems] = useState<ItemShowcase[]>([]);

  useEffect(() => {
    let isMounted = true;
    const setIfMounted = (item: ItemShowcase[]) => {
      if (isMounted) setItems(item);
    }
    
    (id?
      getItemsByCategory(id,setIfMounted):
      getItems(setIfMounted)
    ).then(() => {
      setNotFoundMessage(null);
    })
    .catch(err => {
      if (err instanceof Error) {
        setNotFoundMessage({title: "Items no encontrados 😭", description: err.message});
      }
    })
    
    return () => {isMounted = false};
  }, [id]);
  
  return <>
    {notFoundMessage?
    <NotFound {...notFoundMessage} />
    :
    <div id="item-list-container">
      <div id="store-title">
        <h2 id="greeting">Pide tus helados antes de que se derritan!</h2>
      </div>
      <div id="product-list">
        <div className= "row justify-content-center py-5">
          <div>
            <h1 className={!id?"pb-5":""}>Tienda</h1>
            {id && <p className="pb-5">Categoría: {id}</p>}
          </div>
          {items.length?
          <ItemList items={items} />:
          <Loading />
          }
        </div>
      </div>
    </div>
    }
  </>
}

export default ItemListContainer;