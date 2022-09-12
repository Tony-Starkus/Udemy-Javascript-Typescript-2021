import { Product } from './product';

const createSut = (name: string, price: number) => {
  return new Product(name, price);
};

describe('Product', () => {
  it('should have properties name and price', () => {
    // System under test
    const sut = createSut('Camiseta', 49.9);

    expect(sut).toHaveProperty('name', 'Camiseta');
    expect(sut).toHaveProperty('price', 49.9);
  });
});
