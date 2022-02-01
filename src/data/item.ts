import Item from '../dataTypes/item';

const imageUrl = "./images/helados/";

const items: Item[] = [
/*        id |title                   |description                                  |price|url                                  | stock*/
  new Item(1,'Chocolate'            , 'No puede faltar en tu pedido!'                 ,20 ,imageUrl+'Paletas/chocolate.jpg'          , 2),
  new Item(2,'Sambayón'             , 'Un sabor clásico e imperdible'                 ,10 ,imageUrl+'Paletas/Vainilla.jpg'           , 3),
  new Item(3,'Choconuez'            , 'Porque no todo en la vida es helado'           ,3  ,imageUrl+'Paletas/nueces.jpg'             , 4),
  new Item(4,'Paleta Triple'        , 'Perfecto para indecisos'                       ,5  ,imageUrl+'Paletas/triple.jpg'             , 5),
  new Item(5,'Banana'               , 'El preferido de Tarzán'                        ,7  ,imageUrl+'recipientes/vainilla.jpg'       , 6),
  new Item(6,'Dulce de L.'          , 'No hace falta describirlo...'                  ,16 ,imageUrl+'recipientes/dulce-de-leche.jpg' , 7),
  new Item(7,'Mora'                 , 'Un sabor que te enamora'                       ,4  ,imageUrl+'recipientes/mora.jpg'           , 9),
];

const obtenerHelados = (): Item[] => items;

export {obtenerHelados};