import Item from './item';

class ItemPurchase extends Item {
  amount: number;

  constructor(id: string, title: string, price: number, amount: number) {
    super(id, title, price);
    this.amount = amount;
  }

}

export default ItemPurchase;