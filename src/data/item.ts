import Item from '../dataTypes/item';

const helados: Item[] = [
/*          id|title        | description             price|url*/
  new Item(1,'./default.png','Chocolate'           ,10   ,'./default.png', 2),
  new Item(2,'./default.png','Dulce de Leche'      ,0   ,'./default.png', 3),
  new Item(3,'./default.png','Frambuesa'           ,2   ,'./default.png', 4),
  new Item(4,'./default.png','Lemon Pie'           ,1    ,'./default.png', 5),
  new Item(5,'./default.png','Maracuyá'            ,7   ,'./default.png', 6),
  new Item(6,'./default.png','Frutilla'            ,16  ,'./default.png', 7),
  new Item(7,'./default.png','Vainilla'            ,22  ,'./default.png', 8),
  new Item(8,'./default.png','Limón'               ,4   ,'./default.png', 9),
];

const obtenerHelados = (): Item[] => helados;

export {obtenerHelados};