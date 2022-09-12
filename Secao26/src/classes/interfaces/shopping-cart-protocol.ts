import { CartItem } from './cart-item';

export interface ShoppingCartProtocol {
  items: Readonly<CartItem[]>;
  total: number;
  addItem(item: CartItem): void;
  removeItem(index: number): void;
  totalWithDiscount(): number;
  isEmpty(): boolean;
  clear(): void;
}
