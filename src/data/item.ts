/*import Item from '../dataTypes/item';
import ItemCategory from '../dataTypes/category';
import ItemShowcase from '../dataTypes/itemShowcase';

const imageUrl = "/images/helados/";

//Enum destructuring
const {Paleta, Recipiente, Postre} = ItemCategory;

class ItemHandler {
  private static instance: ItemHandler;
  items = new Map<string,Item>();

  private constructor() { }

  public static getInstance(): ItemHandler {
    if (!ItemHandler.instance) {
      ItemHandler.instance = new ItemHandler();
    }

    return ItemHandler.instance;
  }

  //??
  setItems(newItems: ItemShowcase[]): void {
    this.items = new Map<string, ItemShowcase>();
    newItems.forEach((it) => this.items.set(it.id, it));
  }

  addItem(newItem: ItemShowcase) {
    if (this.items.get(newItem.id) instanceof ItemShowcase) {
      throw new Error("Este item ya existía previamente!");
    }

    this.items.set(newItem.id, newItem);
  }

  getItems(): Map<string,Item>{
    return this.items;
  }
  
  getItem (itemId: string): Item {
    let res: Item | undefined;
    
    res = this.items.get(itemId);
    if (!(res instanceof Item)) {
      throw new Error("Item no encontrado!!!");
    }
    
    return res;
  } 

}*/

/*                id |title                 |description                                    |price|url                                      | stock    | type */
//  new ItemShowcase(1,'Chocolate'            , 'No puede faltar en tu pedido!'                 ,1  ,imageUrl+'Paletas/chocolate.png'          , Paleta    , 15),
//  new ItemShowcase(2,'Sambayón'             , 'Un sabor clásico e imperdible'                 ,1  ,imageUrl+'Paletas/Vainilla.png'           , Paleta    , 12),
//  new ItemShowcase(3,'Choconuez'            , 'Porque no todo en la vida es helado'           ,2  ,imageUrl+'Paletas/nueces.png'             , Paleta    , 14),
//  new ItemShowcase(4,'Paleta Triple'        , 'Perfecto para los más indecisos'               ,2  ,imageUrl+'Paletas/triple.png'             , Paleta    , 5),
//  new ItemShowcase(5,'1/2 Litros'           , 'Elige hasta 2 sabores de helado!'              ,3  ,imageUrl+'recipientes/medio_litro.png'    , Recipiente, 6),
//  new ItemShowcase(6,'1 Litro'              , 'Elige hasta 3 sabores de helado!'              ,5  ,imageUrl+'recipientes/un_litro.png'       , Recipiente, 7),
//  new ItemShowcase(7,'2 Litros'             , 'Elige hasta 4 sabores de helado!'              ,9  ,imageUrl+'recipientes/dos_litros.png'     , Recipiente, 9),
//  new ItemShowcase(8,'Brownielado'          , 'Brownie y helado... nada más que agregar'      ,4 ,imageUrl+'postres/brownie.jpg'             , Postre    , 9),
//  new ItemShowcase(9,'Super porción'        , 'Reserva de helado para toda una vida'          ,5 ,imageUrl+'postres/choco-salsa-nuez.jpg'    , Postre    , 1),
//];

/*export {ItemHandler};*/