import { ProductProcotol } from "./product-protocol";

export class ProductDecorator implements ProductProcotol {
  constructor(protected product: ProductProcotol) {}

  getName(): string {
    return this.product.getName();
  }

  getPrice(): number {
    return this.product.getPrice();
  }
}
