import ItemType from './itemCategory';

class Item {
  id: number;
  title: string;
  description: string;
  price: number;
  pictureUrl: string;
  stock: number;
  category: ItemType;

  constructor(id: number, title: string, description: string, price: number, pictureUrl: string, stock: number, category: ItemType) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.description = description;
    this.pictureUrl = pictureUrl;
    this.stock = stock;
    this.category = category;
  }
}

export default Item;