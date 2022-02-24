import Item from './item';
import Category from './category';

class ItemShowcase extends Item {
  pictureUrl: string;
  description: string;
  category: Category;
  stock: number;

  constructor(id: string, title: string, description: string, price: number, pictureUrl: string, category: Category, stock: number) {
    super(id, title, price);
    this.pictureUrl = pictureUrl;
    this.description = description;
    this.category = category;
    this.stock = stock;
  }
}

export default ItemShowcase;