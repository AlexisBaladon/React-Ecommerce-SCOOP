class Item {
  id: number;
  title: string;
  description: string;
  price: number;
  pictureUrl: string;
  stock: number;

  constructor(id: number, title: string, description: string, price: number, pictureUrl: string, stock: number) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.description = description;
    this.pictureUrl = pictureUrl;
    this.stock = stock;
  }
}

export default Item;