import {obtenerHelado, obtenerHelados} from '../data/item';

const obtenerPromiseAux = (setItems: Function, getItems: Function): Promise<any> => {
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

const obtenerPromiseHelados = (setHelados: Function): Promise<any> => {
  return obtenerPromiseAux(setHelados, obtenerHelados);
}

const getItem = (itemId: number, setHelados: Function): Promise<any> => {
  const getItemsAux = () => {obtenerHelado(itemId);};
  return obtenerPromiseAux(setHelados, getItemsAux);
}

export {obtenerPromiseHelados, getItem};