import DtItem from '../dataTypes/item';
import {obtenerHelados} from '../data/item';

const obtenerPromiseHelados = (items: DtItem[], setItems: Function): Promise<DtItem[] | void> => {
  const itemsPromise = new Promise<DtItem[]>((resolve,reject) => {
    const itemsDB: DtItem[] = obtenerHelados();
    if (itemsDB.length === 0) {
      throw new Error('No se han encontrado helados!');
    }
    setTimeout(() => {
      resolve(itemsDB);
      console.log('Se ejecuta solo una vez!')
    }, 2000);
  }).
  then((result: DtItem[]) => {
    setItems(result);
  })
  .catch((err) => {
    console.warn(err);
  });

  return itemsPromise;
}

export {obtenerPromiseHelados};