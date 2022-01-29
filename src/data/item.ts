import Item from '../dataTypes/item';

const helados: Item[] = [
/*          id|title        | description             price|url*/
  new Item(1,'Chocolate'     , 'El mejor helado'      ,20  ,'./default.png', 2),
  new Item(2,'Dulce de Leche', 'El mejor helado'      ,10   ,'./default.png', 3),
  new Item(3,'Frambuesa'     , 'El mejor helado'      ,3   ,'./default.png', 4),
  new Item(4,'Lemon Pie'     , 'El mejor helado'      ,5   ,'./default.png', 5),
  new Item(5,'Maracuyá'      , 'El mejor helado'      ,7   ,'./default.png', 6),
  new Item(6,'Frutilla'      , 'El mejor helado'      ,16  ,'./default.png', 7),
  new Item(7,'Vainilla'      , 'El mejor helado'      ,22  ,'./default.png', 8),
  new Item(8,'Limón'         , 'El mejor helado'      ,4   ,'./default.png', 9),
];

const obtenerHelados = (): Item[] => helados;

export {obtenerHelados};