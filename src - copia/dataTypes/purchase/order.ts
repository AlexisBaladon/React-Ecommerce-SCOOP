import ItemPurchase from "../items/itemPurchase";
import User from "../user/user";
import PurchaseInfo from "./purchaseInfo";

class Order {
    id: string;
    buyer: User;
    purchaseInfo: PurchaseInfo;
    items: ItemPurchase[];
    
    constructor(id: string, buyer: User, purchaseInfo: PurchaseInfo, items: ItemPurchase[]) {
      this.id = id;
      this.buyer = buyer;
      this.purchaseInfo = purchaseInfo;
      this.items = items;
    }
  
  }
  
  export default Order;