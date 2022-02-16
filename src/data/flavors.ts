import Flavor from '../dataTypes/flavor';

const imageUrl = "/images/helados/";

const items: Flavor[] = [
/*        id |title        |url                                       */
  new Flavor(1,'Banana'      ,imageUrl+'recipientes/vainilla.jpg'       ),
  new Flavor(2,'Dulce de L.' ,imageUrl+'recipientes/dulce-de-leche.jpg' ),
  new Flavor(3,'Mora'        ,imageUrl+'recipientes/mora.jpg'           ),
  new Flavor(4,'Frutilla'    ,imageUrl+'recipientes/frutilla.jpg'       ),
];

const getFlavors = (): Flavor[] => items;

const getFlavor = (itemId: number): Flavor => {
  let res: Flavor | undefined;
  const sameId = (item: Flavor) => (item.id === itemId);
  
  res = items.find(sameId);
  if (!(res instanceof Flavor)) {
    throw new Error("Sabor no encontrado!!!");
  }
  
  return res;
}

export {getFlavors, getFlavor};