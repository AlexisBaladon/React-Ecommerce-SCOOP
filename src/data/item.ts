import Item from '../dataTypes/item';

const imageUrl = "./images/helados/";

const helados: Item[] = [
/*          id|title        | description             price|url| stock*/
  new Item(1,'Chocolate'     , 'No puede faltar en tu pedido!' , 20,imageUrl+'Paletas/chocolate.jpg', 2),
  new Item(2,'Sambayon'         , 'Un sabor clásico como nunca lo habías visto!'      ,10   ,imageUrl+'Paletas/Vainilla.jpg', 3),
  new Item(3,'Chocolate con nueces'     , 'Porque no todo en la vida es helado', 3,imageUrl+'Paletas/nueces.jpg', 4),
  new Item(4,'Triple bendición'     , 'Perfecto para clientes indecisos'      ,5   ,imageUrl+'Paletas/triple.jpg', 5),
  new Item(5,'Banana'      , 'El preferido de Tarzán'      ,7   ,imageUrl+'recipientes/vainilla.jpg', 6),
  new Item(6,'Dulce de Leche'      , 'Lo mejor de la industria en la mejor compañía'      ,16  ,imageUrl+'recipientes/dulce-de-leche.jpg', 7),
  new Item(7,'Mora'         , 'Un sabor que te enamora'      ,4   ,imageUrl+'recipientes/mora.jpg', 9),
];

const obtenerHelados = (): Item[] => helados;

export {obtenerHelados};