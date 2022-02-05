import Item from '../dataTypes/item';

const imageUrl = "./images/helados/";

const items: Item[] = [
/*        id |title                   |description                                  |price|url                                  | stock*/
  new Item(1,'Chocolate'            , 'No puede faltar en tu pedido!'                 ,20 ,imageUrl+'Paletas/chocolate.png'          , 2),
  new Item(2,'Sambayón'             , 'Un sabor clásico e imperdible'                 ,10 ,imageUrl+'Paletas/Vainilla.png'           , 3),
  new Item(3,'Choconuez'            , 'Porque no todo en la vida es helado'           ,3  ,imageUrl+'Paletas/nueces.png'             , 4),
  new Item(4,'Paleta Triple'        , 'Perfecto para los más indecisos'                       ,5  ,imageUrl+'Paletas/triple.png'             , 5),
  new Item(5,'Banana'               , 'El preferido de Tarzán'                        ,7  ,imageUrl+'recipientes/vainilla.jpg'       , 6),
  new Item(6,'Dulce de L.'          , 'No hace falta describirlo...'                  ,16 ,imageUrl+'recipientes/dulce-de-leche.jpg' , 7),
  new Item(7,'Mora'                 , 'Un sabor que te enamora'                       ,4  ,imageUrl+'recipientes/mora.jpg'           , 9),
];

const obtenerHelados = (): Item[] => items;

const obtenerHelado = (itemId: number): Item => {
  let res: Item | undefined;
  const sameId = (item: Item) => (item.id === itemId);
  
  res = items.find(sameId);
  if (!(res instanceof Item)) {
    throw new Error("Item no encontrado!!!");
  }
  
  return res;
}

export {obtenerHelados, obtenerHelado};