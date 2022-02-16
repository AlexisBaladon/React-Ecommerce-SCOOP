import Category from "./category";

abstract class Item {
  id: number;
  title: string;
  price: number;
  pictureUrl: string;
  category: Category;

  constructor(id: number, title: string, price: number, pictureUrl: string, category: Category) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.pictureUrl = pictureUrl;
    this.category = category;
  }
  
  equals(it: Item): boolean {
    return it.id === this.id;
  }

}

export default Item;