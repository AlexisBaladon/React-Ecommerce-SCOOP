import { getFlavor, getFlavors } from '../data/flavors';
import {getItem, getItems} from '../data/item';
import Flavor from '../dataTypes/flavor';
import ItemShowcase from '../dataTypes/itemShowcase';

/* 
 * Uses getItems to query i from "Database".
 * After 2 seconds, i gets resolved.
 * Then, setItems is used with i.
 * Finally *laughs in asynchronous*, the promise gets returned.
 */
const getPromiseAux = (setItems: (i: any) => any, getItems: () => any): Promise<any> => {
  const itemsPromise = new Promise<any>((resolve,reject) => {
    const itemsDB: any = getItems();
    setTimeout(() => {
      resolve(itemsDB);
    }, 2000);
  })
  .then((result: any) => {
    setItems(result);
  })
  .catch((err) => {
    console.error(err);
  });

  return itemsPromise;
}

/* Items */

const getPromiseItems = (setItems: (i: ItemShowcase[]) => any): Promise<any> => {
  return getPromiseAux(setItems, getItems);
}

const getPromiseFilteredItems = (itemFilter: (i: ItemShowcase) => boolean, setItems: (i: ItemShowcase[]) => any): Promise<any> => {
  const setItemsWithFilter = (items: ItemShowcase[]): void => setItems(items.filter(itemFilter));
  return getPromiseAux(setItemsWithFilter, getItems);
}

const getPromiseItem = (itemId: number, setItem: (i: ItemShowcase) => any): Promise<any> => {
  const getItemsAux = () => getItem(itemId);
  return getPromiseAux(setItem, getItemsAux);
}

/* Flavors */

const getPromiseFlavors = (setItems: (i: Flavor[]) => any): Promise<any> => {
  return getPromiseAux(setItems, getFlavors);
}

const getPromiseFlavor = (itemId: number, setItem: (i: Flavor) => any): Promise<any> => {
  const getFlavorsAux = () => getFlavor(itemId);
  return getPromiseAux(setItem, getFlavorsAux);
}



export {getPromiseItems, getPromiseItem, getPromiseFilteredItems,
        getPromiseFlavors, getPromiseFlavor};