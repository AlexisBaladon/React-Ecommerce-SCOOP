import {obtenerHelado, obtenerHelados} from '../data/item';
import Item from '../dataTypes/item';

/* 
 * Gets an object with getItems; use setItems on it; and finally,
 * returns it after 2 seconds with a Promise
 */
const obtenerPromiseAux = (setItems: (i: any) => any, getItems: () => any): Promise<any> => {
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

const obtenerPromiseHelados = (setItems: (i: Item[]) => any): Promise<any> => {
  return obtenerPromiseAux(setItems, obtenerHelados);
}

const getFilteredItems = (itemFilter: (i: Item) => boolean, setItems: (i: Item[]) => any): Promise<any> => {
  const setItemsWithFilter = (items: Item[]): void => setItems(items.filter(itemFilter));
  return obtenerPromiseAux(setItemsWithFilter, obtenerHelados);
}

const getItem = (itemId: number, setItem: (i: Item) => any): Promise<any> => {
  const getItemsAux = () => obtenerHelado(itemId);
  return obtenerPromiseAux(setItem, getItemsAux);
}

export {obtenerPromiseHelados, getItem, getFilteredItems};