export interface ECommerceProductProtocol {
  name: string;
  price: number;
}

export class ECommerceShoppingCart {
  private products: ECommerceProductProtocol[] = [];
  protected _discountStrategy: DiscountStrategy = new DiscountStrategy();

  set discount(discount: DiscountStrategy) {
    this._discountStrategy = discount;
  }

  addProduct(...products: ECommerceProductProtocol[]): void {
    products.forEach((product) => this.products.push(product));
  }

  getProducts(): ECommerceProductProtocol[] {
    return this.products;
  }

  getTotal(): number {
    return this.products.reduce((sum, product) => sum + product.price, 0);
  }

  getTotalWithDiscount(): number {
    // const total = this.getTotal();
    // if (total >= 100 && total < 200) {
    //   this.discountStrategy.discount = 10;
    // } else if (total >= 200 && total < 300) {
    //   this.discountStrategy.discount = 20;
    // } else if (total >= 300) {
    //   this.discountStrategy.discount = 30;
    // }

    // return total - total * (this.discount / 100);
    return this._discountStrategy.getDiscount(this);
  }
}

export class DiscountStrategy {
  protected discount = 10;

  getDiscount(cart: ECommerceShoppingCart): number {
    return cart.getTotal();
  }
}

export class DefaultDiscount extends DiscountStrategy {
  protected discount = 0;

  getDiscount(cart: ECommerceShoppingCart): number {
    const total = cart.getTotal();
    if (total >= 100 && total < 200) {
      this.discount = 10;
    } else if (total >= 200 && total < 300) {
      this.discount = 20;
    } else if (total >= 300) {
      this.discount = 30;
    }

    return total - total * (this.discount / 100);
  }
}

const shoppingCart = new ECommerceShoppingCart();
shoppingCart.discount = new DefaultDiscount();
shoppingCart.addProduct({ name: "Produto 1", price: 50 });
shoppingCart.addProduct({ name: "Produto 2", price: 50 });
console.log(shoppingCart.getTotal());
console.log(shoppingCart.getTotalWithDiscount());
