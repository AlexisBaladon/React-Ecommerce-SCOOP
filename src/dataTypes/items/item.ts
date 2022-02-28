abstract class Item {
  id: string;
  title: string;
  price: number;

  constructor(id: string, title: string, price: number) {
    this.id = id;
    this.title = title;
    this.price = price;
  }
  
  equals(it: Item): boolean {
    return it.id === this.id;
  }

}

export default Item;