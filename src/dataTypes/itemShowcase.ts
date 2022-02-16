import Item from './item';
import Category from './category';

class ItemShowcase extends Item {
  description: string;
  stock: number;

  constructor(id: number, title: string, description: string, price: number, pictureUrl: string, category: Category, stock: number) {
    super(id, title, price, pictureUrl, category);
    this.description = description;
    this.stock = stock;
  }
}

export default ItemShowcase;