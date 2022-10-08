import { TaxVisitorProtocol } from "./tex-visitor-protocol";
import { VisitableProduct } from "./visitable-product";

export class Cigarette extends VisitableProduct {
  constructor(protected price: number) {
    super("Food", price);
  }

  getPriceWithTaxes(visitor: TaxVisitorProtocol): number {
    return visitor.calculateTaxesForCigarette(this);
  }
}
