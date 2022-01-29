import DtItem from '../dataTypes/item';
import {obtenerHelados} from '../data/item';

const obtenerPromiseHelados = (items: DtItem[], setHelados: Function): Promise<DtItem[] | void> => {
  const itemsPromise = new Promise<DtItem[]>((resolve,reject) => {
    const itemsDB: DtItem[] = obtenerHelados();
    if (itemsDB.length === 0) {
      throw new Error('No se han encontrado helados!');
    }
    setTimeout(() => {
      resolve(itemsDB);
    }, 2000);
  }).
  then((result: DtItem[]) => {
    setHelados(result);
    console.log('Helados: ' + items);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log('Fin de promesa de helados!');
  });

  return itemsPromise;
}

export {obtenerPromiseHelados};