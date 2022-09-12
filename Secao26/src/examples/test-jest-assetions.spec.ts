describe('Primitive values', () => {
  it('should test jest assertions', () => {
    const number = 10;

    expect(number).toBe(10); // Compara com Object.is
    expect(number).toEqual(10); // Esse é bom para testar objetos

    expect(number).not.toBe(null);
    expect(number).not.toBeNull();

    expect(number).not.toBeFalsy();
    expect(number).toBeTruthy();

    expect(number).toBeGreaterThan(9);
    expect(number).toBeLessThan(11);
    expect(number).toBeGreaterThanOrEqual(10);
    expect(number).toBeCloseTo(10.001);

    expect(number).toHaveProperty('toString');
  });
});

describe('Objects', () => {
  it('should test jest assertions with objects', () => {
    const person = { name: 'Luiz', age: 30 };
    const anotherPerson = { ...person };

    // expect(person).toBe(anotherPerson); // Fail, objects are not equals on memory
    expect(person).toEqual(anotherPerson); // Success, the object structures and values are equals

    expect(person).toHaveProperty('age');
    expect(person).toHaveProperty('age', 30); // Check key and value

    expect(person.name).toBe('Luiz');
  });
});
