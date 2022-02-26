import PaymentMethod from "./paymentMethod";

class PurchaseInfo {
    phoneNumber: number;
    country: string;
    city: string;
    postalCode: number;
    paymentMethod: PaymentMethod;
    date: Date;
    totalCost: number;
    
    constructor(phoneNumber: number, country: string, city: string, postalCode: number, payMethod: PaymentMethod, date: Date, totalCost: number) {
      this.phoneNumber = phoneNumber;
      this.country = country;
      this.city = city;
      this.postalCode = postalCode;
      this.paymentMethod = payMethod;
      this.date = date;
      this.totalCost = totalCost;
    }
  
  }
  
  export default PurchaseInfo;