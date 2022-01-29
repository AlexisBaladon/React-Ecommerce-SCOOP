import Helado from '../dataTypes/item';
import {obtenerHelados} from '../data/item';

const obtenerPromiseHelados = (helados: Helado[], setHelados: Function): void => {
  const heladosPromise = new Promise<Helado[]>((resolve,reject) => {
    const heladosDB: Helado[] = obtenerHelados();
    if (heladosDB.length === 0) {
      throw new Error('No se han encontrado helados!');
    }
    setTimeout(() => {
      resolve(heladosDB);
    }, 2000);
  }).
  then((result: Helado[]) => {
    setHelados(result);
    console.log('Helados: ' + helados);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log('Fin de promesa de helados!');
  });
}

export {obtenerPromiseHelados};