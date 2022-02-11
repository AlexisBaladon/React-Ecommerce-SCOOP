import { getFlavor, getFlavors } from '../data/flavors';
import {obtenerHelado, obtenerHelados} from '../data/item';
import Flavor from '../dataTypes/flavor';
import Item from '../dataTypes/item';

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

const getItems = (setItems: (i: Item[]) => any): Promise<any> => {
  return getPromiseAux(setItems, obtenerHelados);
}

const getFilteredItems = (itemFilter: (i: Item) => boolean, setItems: (i: Item[]) => any): Promise<any> => {
  const setItemsWithFilter = (items: Item[]): void => setItems(items.filter(itemFilter));
  return getPromiseAux(setItemsWithFilter, obtenerHelados);
}

const getItem = (itemId: number, setItem: (i: Item) => any): Promise<any> => {
  const getItemsAux = () => obtenerHelado(itemId);
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



export {getItems, getItem, getFilteredItems,
        getPromiseFlavors, getPromiseFlavor};