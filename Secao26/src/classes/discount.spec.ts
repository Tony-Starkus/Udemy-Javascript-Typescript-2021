import { Discount, FiftyPercentDiscount, NoDiscount } from './discount';

const createSut = (className: new () => Discount) => {
  return new className();
};

describe('Discount', () => {
  it('should have no discount', () => {
    const sut = createSut(NoDiscount);
    expect(sut.calculate(10.99)).toBeCloseTo(10.99);
  });

  it('should apply 50% discount on price', () => {
    const sut = createSut(FiftyPercentDiscount);
    expect(sut.calculate(100)).toBeCloseTo(-4900);
  });
});
