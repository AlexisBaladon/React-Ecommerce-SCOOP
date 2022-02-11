import Item from '../dataTypes/item';
import ItemCategory from '../dataTypes/itemCategory';

const imageUrl = "/images/helados/";

//Enum destructuring
const {Paleta, Recipiente, Postre} = ItemCategory;

const items: Item[] = [
/*        id |title                   |description                                  |price|url                                  | stock | type */
  new Item(1,'Chocolate'            , 'No puede faltar en tu pedido!'                 ,2  ,imageUrl+'Paletas/chocolate.png'          , 15, Paleta),
  new Item(2,'Sambayón'             , 'Un sabor clásico e imperdible'                 ,2  ,imageUrl+'Paletas/Vainilla.png'           , 12, Paleta),
  new Item(3,'Choconuez'            , 'Porque no todo en la vida es helado'           ,3  ,imageUrl+'Paletas/nueces.png'             , 14, Paleta),
  new Item(4,'Paleta Triple'        , 'Perfecto para los más indecisos'               ,5  ,imageUrl+'Paletas/triple.png'             , 5,  Paleta),
  new Item(5,'1/2 Litros'               , 'Elige hasta 2 sabores de helado!'              ,4  ,imageUrl+'recipientes/medio_litro.png'       , 6,  Recipiente),
  new Item(6,'1 Litro'          , 'Elige hasta 3 sabores de helado!'              ,4  ,imageUrl+'recipientes/un_litro.png' , 7,  Recipiente),
  new Item(7,'2 Litros'                 , 'Elige hasta 4 sabores de helado!'              ,4  ,imageUrl+'recipientes/dos_litros.png'           , 9,  Recipiente),
  new Item(8,'Brownielado'          , 'Brownie y helado... nada más que agregar'      ,10 ,imageUrl+'postres/brownie.jpg'            , 9,  Postre),
  new Item(9,'Super porción'        , 'Reserva de helado para toda una vida'          ,20 ,imageUrl+'postres/choco-salsa-nuez.jpg'   , 1,  Postre),
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